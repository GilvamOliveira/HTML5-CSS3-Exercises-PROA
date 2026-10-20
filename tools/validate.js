const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
process.chdir(root);

const errors = [];
const skipDescription = 'Nível 6 — Recursos e estrutura do documento/32-iframe-conteudo-externo/exemplo.html';

function relative(file) {
  return path.relative(root, file).replace(/\\/g, '/');
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function stripCode(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<pre\b[\s\S]*?<\/pre>/gi, '')
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '');
}

function decode(value) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
}

function isExternal(reference) {
  return /^(https?:|mailto:|tel:|data:|javascript:|\/\/)/i.test(reference);
}

function idsOf(html) {
  return new Set([...stripCode(html).matchAll(/\sid="([^"]+)"/g)].map(match => match[1]));
}

function checkLinks(file) {
  const html = fs.readFileSync(file, 'utf8');
  const clean = stripCode(html);
  const localIds = idsOf(html);
  const dir = path.dirname(file);

  for (const match of clean.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const reference = match[1];
    if (reference === '#' || isExternal(reference)) continue;

    const [pathPart, hash] = reference.split('#');
    const filePart = pathPart.split('?')[0];

    if (!filePart) {
      if (hash && !localIds.has(hash)) {
        errors.push(`${relative(file)}: âncora não encontrada #${hash}`);
      }
      continue;
    }

    const target = path.resolve(dir, decode(filePart));
    if (!fs.existsSync(target)) {
      errors.push(`${relative(file)}: referência local inexistente ${reference}`);
      continue;
    }

    if (hash && target.endsWith('.html')) {
      const targetIds = idsOf(fs.readFileSync(target, 'utf8'));
      if (!targetIds.has(hash)) {
        errors.push(`${relative(file)}: âncora não encontrada ${reference}`);
      }
    }
  }
}

function checkPage(file) {
  const html = fs.readFileSync(file, 'utf8');
  const name = relative(file);
  const isExample = name === skipDescription;
  const isRootIndex = name === 'index.html';

  checkLinks(file);

  const idList = [...stripCode(html).matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  const duplicateIds = idList.filter((id, index, list) => list.indexOf(id) !== index);
  for (const id of new Set(duplicateIds)) {
    errors.push(`${name}: id duplicado "${id}"`);
  }

  if (!/<html[^>]*\blang="pt-BR"/i.test(html)) {
    errors.push(`${name}: atributo lang="pt-BR" ausente`);
  }
  if (!/<meta[^>]*charset="?UTF-8"?/i.test(html)) {
    errors.push(`${name}: meta charset ausente`);
  }
  if (!/<meta[^>]*name="viewport"/i.test(html)) {
    errors.push(`${name}: meta viewport ausente`);
  }
  if (!isExample && !/<meta[^>]*name="description"/i.test(html)) {
    errors.push(`${name}: meta description ausente`);
  }
  if (!/<title>[^<]+<\/title>/.test(html)) {
    errors.push(`${name}: title ausente`);
  }
  if (!isExample && !isRootIndex && !html.includes('data-exercise-nav')) {
    errors.push(`${name}: script de navegação ausente`);
  }
}

function checkCss(file) {
  const css = fs.readFileSync(file, 'utf8');
  const dir = path.dirname(file);

  for (const match of css.matchAll(/url\((['"]?)([^'")]+)\1\)/g)) {
    const reference = match[2].split('?')[0].split('#')[0];
    if (!reference || reference.startsWith('#') || isExternal(reference)) continue;
    const target = path.resolve(dir, decode(reference));
    if (!fs.existsSync(target)) {
      errors.push(`${relative(file)}: recurso CSS inexistente ${match[2]}`);
    }
  }
}

function checkNavigation() {
  const source = fs.readFileSync('js/exercise-nav.js', 'utf8');
  const start = source.indexOf('var exercises = [');
  const arrayStart = source.indexOf('[', start);
  const arrayEnd = source.indexOf('];', arrayStart);
  const exercises = JSON.parse(source.slice(arrayStart, arrayEnd + 1));

  if (exercises.length !== 70) {
    errors.push(`js/exercise-nav.js: esperados 70 exercícios, encontrados ${exercises.length}`);
  }

  exercises.forEach((exercise, index) => {
    if (exercise.n !== index + 1) {
      errors.push(`js/exercise-nav.js: numeração inesperada no índice ${index} (${exercise.n})`);
    }

    const pagePath = exercise.path.replace(/\\/g, '/');
    const absolutePath = path.resolve(root, pagePath);
    if (!fs.existsSync(absolutePath)) {
      errors.push(`js/exercise-nav.js: arquivo do exercício ${exercise.n} não encontrado (${pagePath})`);
      return;
    }
    if (decode(exercise.url) !== pagePath) {
      errors.push(`js/exercise-nav.js: URL divergente no exercício ${exercise.n}`);
    }

    const html = fs.readFileSync(absolutePath, 'utf8');
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
    if (exercise.n !== 30 && title !== exercise.title) {
      errors.push(`js/exercise-nav.js: título divergente no exercício ${exercise.n}`);
    }
    if (!html.includes('data-exercise-nav')) {
      errors.push(`${pagePath}: script de navegação ausente`);
    }

    const readme = path.join(path.dirname(absolutePath), 'README.md');
    if (!fs.existsSync(readme)) {
      errors.push(`${pagePath}: README.md ausente`);
    }
  });

  return exercises;
}

function checkReadme() {
  const readme = fs.readFileSync('README.md', 'utf8');
  const rows = [...readme.matchAll(/^\|\s*(\d{2})\s*\|[^\n]*\]\(([^)]+)\)/gm)];
  if (rows.length !== 70) {
    errors.push(`README.md: esperadas 70 linhas de exercícios, encontradas ${rows.length}`);
  }

  const numbers = rows.map(row => Number(row[1])).sort((a, b) => a - b);
  numbers.forEach((number, index) => {
    if (number !== index + 1) {
      errors.push(`README.md: numeração de exercícios inconsistente (${number})`);
    }
  });

  rows.forEach(row => {
    const target = path.resolve(root, decode(row[2]));
    if (!fs.existsSync(target)) {
      errors.push(`README.md: link do exercício ${row[1]} não encontrado (${row[2]})`);
    }
  });
}

function checkRootIndex() {
  const html = fs.readFileSync('index.html', 'utf8');
  const cards = (html.match(/class="exercise-card"/g) || []).length;
  if (cards !== 70) {
    errors.push(`index.html: esperados 70 cartões, encontrados ${cards}`);
  }
}

const files = walk(root);
const htmlFiles = files.filter(file => file.endsWith('.html'));
const cssFiles = files.filter(file => file.endsWith('.css'));

htmlFiles.forEach(checkPage);
cssFiles.forEach(checkCss);
const exercises = checkNavigation();
checkReadme();
checkRootIndex();

if (errors.length) {
  console.error(`Validação falhou com ${errors.length} problema(s):`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Validados ${htmlFiles.length} páginas HTML, ${cssFiles.length} arquivos CSS e ${exercises.length} exercícios.`);
console.log('Links, recursos, navegação, metadados e READMEs estão consistentes.');
