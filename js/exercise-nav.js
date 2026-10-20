(function () {
  'use strict';

  var exercises = [
  {
    "n": 1,
    "title": "Minha primeira página HTML",
    "path": "Nível 1 — Primeiros passos com HTML/01-primeira-pagina/index.html",
    "url": "N%C3%ADvel%201%20%E2%80%94%20Primeiros%20passos%20com%20HTML/01-primeira-pagina/index.html"
  },
  {
    "n": 2,
    "title": "Conhecendo os títulos HTML",
    "path": "Nível 1 — Primeiros passos com HTML/02-titulos/index.html",
    "url": "N%C3%ADvel%201%20%E2%80%94%20Primeiros%20passos%20com%20HTML/02-titulos/index.html"
  },
  {
    "n": 3,
    "title": "Construindo uma página com parágrafos",
    "path": "Nível 1 — Primeiros passos com HTML/03-paragrafos/index.html",
    "url": "N%C3%ADvel%201%20%E2%80%94%20Primeiros%20passos%20com%20HTML/03-paragrafos/index.html"
  },
  {
    "n": 4,
    "title": "Formatando textos",
    "path": "Nível 1 — Primeiros passos com HTML/04-formatacao/index.html",
    "url": "N%C3%ADvel%201%20%E2%80%94%20Primeiros%20passos%20com%20HTML/04-formatacao/index.html"
  },
  {
    "n": 5,
    "title": "Frases e citações famosas",
    "path": "Nível 1 — Primeiros passos com HTML/05-citacoes/index.html",
    "url": "N%C3%ADvel%201%20%E2%80%94%20Primeiros%20passos%20com%20HTML/05-citacoes/index.html"
  },
  {
    "n": 6,
    "title": "Comentários para organizar o código",
    "path": "Nível 1 — Primeiros passos com HTML/06-comentarios/index.html",
    "url": "N%C3%ADvel%201%20%E2%80%94%20Primeiros%20passos%20com%20HTML/06-comentarios/index.html"
  },
  {
    "n": 7,
    "title": "Trabalhando com atributos HTML",
    "path": "Nível 1 — Primeiros passos com HTML/07-atributos/index.html",
    "url": "N%C3%ADvel%201%20%E2%80%94%20Primeiros%20passos%20com%20HTML/07-atributos/index.html"
  },
  {
    "n": 8,
    "title": "Minha página de links favoritos",
    "path": "Nível 2 — Links, imagens e navegação/08-links/index.html",
    "url": "N%C3%ADvel%202%20%E2%80%94%20Links,%20imagens%20e%20navega%C3%A7%C3%A3o/08-links/index.html"
  },
  {
    "n": 9,
    "title": "Galeria de imagens",
    "path": "Nível 2 — Links, imagens e navegação/09-galeria/index.html",
    "url": "N%C3%ADvel%202%20%E2%80%94%20Links,%20imagens%20e%20navega%C3%A7%C3%A3o/09-galeria/index.html"
  },
  {
    "n": 10,
    "title": "Criando um miniportfólio",
    "path": "Nível 2 — Links, imagens e navegação/10-portfolio/index.html",
    "url": "N%C3%ADvel%202%20%E2%80%94%20Links,%20imagens%20e%20navega%C3%A7%C3%A3o/10-portfolio/index.html"
  },
  {
    "n": 11,
    "title": "Navegação entre páginas",
    "path": "Nível 2 — Links, imagens e navegação/11-navegacao/index.html",
    "url": "N%C3%ADvel%202%20%E2%80%94%20Links,%20imagens%20e%20navega%C3%A7%C3%A3o/11-navegacao/index.html"
  },
  {
    "n": 12,
    "title": "Favicon e título personalizado",
    "path": "Nível 2 — Links, imagens e navegação/12-favicon-titulo/index.html",
    "url": "N%C3%ADvel%202%20%E2%80%94%20Links,%20imagens%20e%20navega%C3%A7%C3%A3o/12-favicon-titulo/index.html"
  },
  {
    "n": 13,
    "title": "Lista de compras inteligente",
    "path": "Nível 3 — Organização de informações/13-listas/index.html",
    "url": "N%C3%ADvel%203%20%E2%80%94%20Organiza%C3%A7%C3%A3o%20de%20informa%C3%A7%C3%B5es/13-listas/index.html"
  },
  {
    "n": 14,
    "title": "Grade curricular em tabela",
    "path": "Nível 3 — Organização de informações/14-grade-curricular/index.html",
    "url": "N%C3%ADvel%203%20%E2%80%94%20Organiza%C3%A7%C3%A3o%20de%20informa%C3%A7%C3%B5es/14-grade-curricular/index.html"
  },
  {
    "n": 15,
    "title": "Tabela de produtos",
    "path": "Nível 3 — Organização de informações/15-tabela-produtos/index.html",
    "url": "N%C3%ADvel%203%20%E2%80%94%20Organiza%C3%A7%C3%A3o%20de%20informa%C3%A7%C3%B5es/15-tabela-produtos/index.html"
  },
  {
    "n": 16,
    "title": "Entendendo Block e Inline",
    "path": "Nível 3 — Organização de informações/16-block-inline/index.html",
    "url": "N%C3%ADvel%203%20%E2%80%94%20Organiza%C3%A7%C3%A3o%20de%20informa%C3%A7%C3%B5es/16-block-inline/index.html"
  },
  {
    "n": 17,
    "title": "Organizando a página com DIV",
    "path": "Nível 3 — Organização de informações/17-div-organizacao/index.html",
    "url": "N%C3%ADvel%203%20%E2%80%94%20Organiza%C3%A7%C3%A3o%20de%20informa%C3%A7%C3%B5es/17-div-organizacao/index.html"
  },
  {
    "n": 18,
    "title": "Classes reutilizáveis",
    "path": "Nível 3 — Organização de informações/18-classes/index.html",
    "url": "N%C3%ADvel%203%20%E2%80%94%20Organiza%C3%A7%C3%A3o%20de%20informa%C3%A7%C3%B5es/18-classes/index.html"
  },
  {
    "n": 19,
    "title": "Identificando elementos com ID",
    "path": "Nível 3 — Organização de informações/19-id/index.html",
    "url": "N%C3%ADvel%203%20%E2%80%94%20Organiza%C3%A7%C3%A3o%20de%20informa%C3%A7%C3%B5es/19-id/index.html"
  },
  {
    "n": 20,
    "title": "Página com botões",
    "path": "Nível 3 — Organização de informações/20-botoes/index.html",
    "url": "N%C3%ADvel%203%20%E2%80%94%20Organiza%C3%A7%C3%A3o%20de%20informa%C3%A7%C3%B5es/20-botoes/index.html"
  },
  {
    "n": 21,
    "title": "Incorporando conteúdo externo",
    "path": "Nível 4 — Recursos complementares do HTML/21-iframe/index.html",
    "url": "N%C3%ADvel%204%20%E2%80%94%20Recursos%20complementares%20do%20HTML/21-iframe/index.html"
  },
  {
    "n": 22,
    "title": "Primeiro contato com JavaScript",
    "path": "Nível 4 — Recursos complementares do HTML/22-javascript/index.html",
    "url": "N%C3%ADvel%204%20%E2%80%94%20Recursos%20complementares%20do%20HTML/22-javascript/index.html"
  },
  {
    "n": 23,
    "title": "Minha primeira estilização com CSS",
    "path": "Nível 5 — Introdução ao CSS/23-primeira-css/index.html",
    "url": "N%C3%ADvel%205%20%E2%80%94%20Introdu%C3%A7%C3%A3o%20ao%20CSS/23-primeira-css/index.html"
  },
  {
    "n": 24,
    "title": "Praticando a sintaxe do CSS",
    "path": "Nível 5 — Introdução ao CSS/24-sintaxe-css/index.html",
    "url": "N%C3%ADvel%205%20%E2%80%94%20Introdu%C3%A7%C3%A3o%20ao%20CSS/24-sintaxe-css/index.html"
  },
  {
    "n": 25,
    "title": "Laboratório de seletores CSS",
    "path": "Nível 5 — Introdução ao CSS/25-seletores-css/index.html",
    "url": "N%C3%ADvel%205%20%E2%80%94%20Introdu%C3%A7%C3%A3o%20ao%20CSS/25-seletores-css/index.html"
  },
  {
    "n": 26,
    "title": "Caça aos erros de CSS",
    "path": "Nível 5 — Introdução ao CSS/26-erros-css/index.html",
    "url": "N%C3%ADvel%205%20%E2%80%94%20Introdu%C3%A7%C3%A3o%20ao%20CSS/26-erros-css/index.html"
  },
  {
    "n": 27,
    "title": "Laboratório de cores",
    "path": "Nível 5 — Introdução ao CSS/27-cores/index.html",
    "url": "N%C3%ADvel%205%20%E2%80%94%20Introdu%C3%A7%C3%A3o%20ao%20CSS/27-cores/index.html"
  },
  {
    "n": 28,
    "title": "Construindo fundos com CSS",
    "path": "Nível 5 — Introdução ao CSS/28-backgrounds/index.html",
    "url": "N%C3%ADvel%205%20%E2%80%94%20Introdu%C3%A7%C3%A3o%20ao%20CSS/28-backgrounds/index.html"
  },
  {
    "n": 29,
    "title": "Cartões com bordas, margens e padding",
    "path": "Nível 5 — Introdução ao CSS/29-cards/index.html",
    "url": "N%C3%ADvel%205%20%E2%80%94%20Introdu%C3%A7%C3%A3o%20ao%20CSS/29-cards/index.html"
  },
  {
    "n": 30,
    "title": "Projeto final — ONG Verde Vida",
    "path": "Projeto-Final/index.html",
    "url": "Projeto-Final/index.html"
  },
  {
    "n": 31,
    "title": "Laboratório de botões",
    "path": "Nível 6 — Recursos e estrutura do documento/31-laboratorio-botoes/index.html",
    "url": "N%C3%ADvel%206%20%E2%80%94%20Recursos%20e%20estrutura%20do%20documento/31-laboratorio-botoes/index.html"
  },
  {
    "n": 32,
    "title": "Incorporando conteúdo com iframe",
    "path": "Nível 6 — Recursos e estrutura do documento/32-iframe-conteudo-externo/index.html",
    "url": "N%C3%ADvel%206%20%E2%80%94%20Recursos%20e%20estrutura%20do%20documento/32-iframe-conteudo-externo/index.html"
  },
  {
    "n": 33,
    "title": "HTML encontrando JavaScript",
    "path": "Nível 6 — Recursos e estrutura do documento/33-html-javascript/index.html",
    "url": "N%C3%ADvel%206%20%E2%80%94%20Recursos%20e%20estrutura%20do%20documento/33-html-javascript/index.html"
  },
  {
    "n": 34,
    "title": "Organizando caminhos de arquivos",
    "path": "Nível 6 — Recursos e estrutura do documento/34-caminhos-arquivos/index.html",
    "url": "N%C3%ADvel%206%20%E2%80%94%20Recursos%20e%20estrutura%20do%20documento/34-caminhos-arquivos/index.html"
  },
  {
    "n": 35,
    "title": "Explorando a tag HEAD",
    "path": "Nível 6 — Recursos e estrutura do documento/35-tag-head/index.html",
    "url": "N%C3%ADvel%206%20%E2%80%94%20Recursos%20e%20estrutura%20do%20documento/35-tag-head/index.html"
  },
  {
    "n": 36,
    "title": "Criando um layout de site",
    "path": "Nível 6 — Recursos e estrutura do documento/36-layout-site/index.html",
    "url": "N%C3%ADvel%206%20%E2%80%94%20Recursos%20e%20estrutura%20do%20documento/36-layout-site/index.html"
  },
  {
    "n": 37,
    "title": "Sua primeira página responsiva",
    "path": "Nível 6 — Recursos e estrutura do documento/37-pagina-responsiva/index.html",
    "url": "N%C3%ADvel%206%20%E2%80%94%20Recursos%20e%20estrutura%20do%20documento/37-pagina-responsiva/index.html"
  },
  {
    "n": 38,
    "title": "Página para códigos de programação",
    "path": "Nível 6 — Recursos e estrutura do documento/38-codigos-programacao/index.html",
    "url": "N%C3%ADvel%206%20%E2%80%94%20Recursos%20e%20estrutura%20do%20documento/38-codigos-programacao/index.html"
  },
  {
    "n": 39,
    "title": "HTML Semântico",
    "path": "Nível 7 — HTML semântico e boas práticas/39-html-semantico/index.html",
    "url": "N%C3%ADvel%207%20%E2%80%94%20HTML%20sem%C3%A2ntico%20e%20boas%20pr%C3%A1ticas/39-html-semantico/index.html"
  },
  {
    "n": 40,
    "title": "Refatoração semântica",
    "path": "Nível 7 — HTML semântico e boas práticas/40-refatoracao-semantica/index.html",
    "url": "N%C3%ADvel%207%20%E2%80%94%20HTML%20sem%C3%A2ntico%20e%20boas%20pr%C3%A1ticas/40-refatoracao-semantica/index.html"
  },
  {
    "n": 41,
    "title": "Aplicando boas práticas HTML",
    "path": "Nível 7 — HTML semântico e boas práticas/41-boas-praticas-html/index.html",
    "url": "N%C3%ADvel%207%20%E2%80%94%20HTML%20sem%C3%A2ntico%20e%20boas%20pr%C3%A1ticas/41-boas-praticas-html/index.html"
  },
  {
    "n": 42,
    "title": "Entidades HTML",
    "path": "Nível 7 — HTML semântico e boas práticas/42-entidades-html/index.html",
    "url": "N%C3%ADvel%207%20%E2%80%94%20HTML%20sem%C3%A2ntico%20e%20boas%20pr%C3%A1ticas/42-entidades-html/index.html"
  },
  {
    "n": 43,
    "title": "Símbolos HTML",
    "path": "Nível 7 — HTML semântico e boas práticas/43-simbolos-html/index.html",
    "url": "N%C3%ADvel%207%20%E2%80%94%20HTML%20sem%C3%A2ntico%20e%20boas%20pr%C3%A1ticas/43-simbolos-html/index.html"
  },
  {
    "n": 44,
    "title": "Emojis em HTML",
    "path": "Nível 7 — HTML semântico e boas práticas/44-emojis-html/index.html",
    "url": "N%C3%ADvel%207%20%E2%80%94%20HTML%20sem%C3%A2ntico%20e%20boas%20pr%C3%A1ticas/44-emojis-html/index.html"
  },
  {
    "n": 45,
    "title": "Entendendo Charset",
    "path": "Nível 7 — HTML semântico e boas práticas/45-entendendo-charset/index.html",
    "url": "N%C3%ADvel%207%20%E2%80%94%20HTML%20sem%C3%A2ntico%20e%20boas%20pr%C3%A1ticas/45-entendendo-charset/index.html"
  },
  {
    "n": 46,
    "title": "Explorando URL Encode",
    "path": "Nível 7 — HTML semântico e boas práticas/46-url-encode/index.html",
    "url": "N%C3%ADvel%207%20%E2%80%94%20HTML%20sem%C3%A2ntico%20e%20boas%20pr%C3%A1ticas/46-url-encode/index.html"
  },
  {
    "n": 47,
    "title": "HTML versus XHTML",
    "path": "Nível 7 — HTML semântico e boas práticas/47-html-xhtml/index.html",
    "url": "N%C3%ADvel%207%20%E2%80%94%20HTML%20sem%C3%A2ntico%20e%20boas%20pr%C3%A1ticas/47-html-xhtml/index.html"
  },
  {
    "n": 48,
    "title": "Primeiro formulário",
    "path": "Nível 8 — Formulários, estrutura e campos/48-primeiro-formulario/index.html",
    "url": "N%C3%ADvel%208%20%E2%80%94%20Formul%C3%A1rios,%20estrutura%20e%20campos/48-primeiro-formulario/index.html"
  },
  {
    "n": 49,
    "title": "Formulário de cadastro",
    "path": "Nível 8 — Formulários, estrutura e campos/49-formulario-cadastro/index.html",
    "url": "N%C3%ADvel%208%20%E2%80%94%20Formul%C3%A1rios,%20estrutura%20e%20campos/49-formulario-cadastro/index.html"
  },
  {
    "n": 50,
    "title": "Form Attributes",
    "path": "Nível 8 — Formulários, estrutura e campos/50-form-attributes/index.html",
    "url": "N%C3%ADvel%208%20%E2%80%94%20Formul%C3%A1rios,%20estrutura%20e%20campos/50-form-attributes/index.html"
  },
  {
    "n": 51,
    "title": "Tipos básicos de input",
    "path": "Nível 8 — Formulários, estrutura e campos/51-tipos-input/index.html",
    "url": "N%C3%ADvel%208%20%E2%80%94%20Formul%C3%A1rios,%20estrutura%20e%20campos/51-tipos-input/index.html"
  },
  {
    "n": 52,
    "title": "Radio Buttons",
    "path": "Nível 8 — Formulários, estrutura e campos/52-radio-buttons/index.html",
    "url": "N%C3%ADvel%208%20%E2%80%94%20Formul%C3%A1rios,%20estrutura%20e%20campos/52-radio-buttons/index.html"
  },
  {
    "n": 53,
    "title": "Checkbox",
    "path": "Nível 8 — Formulários, estrutura e campos/53-checkbox/index.html",
    "url": "N%C3%ADvel%208%20%E2%80%94%20Formul%C3%A1rios,%20estrutura%20e%20campos/53-checkbox/index.html"
  },
  {
    "n": 54,
    "title": "Select e Option",
    "path": "Nível 8 — Formulários, estrutura e campos/54-select-option/index.html",
    "url": "N%C3%ADvel%208%20%E2%80%94%20Formul%C3%A1rios,%20estrutura%20e%20campos/54-select-option/index.html"
  },
  {
    "n": 55,
    "title": "Textarea",
    "path": "Nível 8 — Formulários, estrutura e campos/55-textarea/index.html",
    "url": "N%C3%ADvel%208%20%E2%80%94%20Formul%C3%A1rios,%20estrutura%20e%20campos/55-textarea/index.html"
  },
  {
    "n": 56,
    "title": "Fieldset e Legend",
    "path": "Nível 8 — Formulários, estrutura e campos/56-fieldset-legend/index.html",
    "url": "N%C3%ADvel%208%20%E2%80%94%20Formul%C3%A1rios,%20estrutura%20e%20campos/56-fieldset-legend/index.html"
  },
  {
    "n": 57,
    "title": "Datalist",
    "path": "Nível 8 — Formulários, estrutura e campos/57-datalist/index.html",
    "url": "N%C3%ADvel%208%20%E2%80%94%20Formul%C3%A1rios,%20estrutura%20e%20campos/57-datalist/index.html"
  },
  {
    "n": 58,
    "title": "Inputs de data e horário",
    "path": "Nível 8 — Formulários, estrutura e campos/58-data-horario/index.html",
    "url": "N%C3%ADvel%208%20%E2%80%94%20Formul%C3%A1rios,%20estrutura%20e%20campos/58-data-horario/index.html"
  },
  {
    "n": 59,
    "title": "Number e Range",
    "path": "Nível 9 — Formulários, validação e atributos/59-number-range/index.html",
    "url": "N%C3%ADvel%209%20%E2%80%94%20Formul%C3%A1rios,%20valida%C3%A7%C3%A3o%20e%20atributos/59-number-range/index.html"
  },
  {
    "n": 60,
    "title": "Color, File e Search",
    "path": "Nível 9 — Formulários, validação e atributos/60-color-file-search/index.html",
    "url": "N%C3%ADvel%209%20%E2%80%94%20Formul%C3%A1rios,%20valida%C3%A7%C3%A3o%20e%20atributos/60-color-file-search/index.html"
  },
  {
    "n": 61,
    "title": "Input Attributes",
    "path": "Nível 9 — Formulários, validação e atributos/61-input-attributes/index.html",
    "url": "N%C3%ADvel%209%20%E2%80%94%20Formul%C3%A1rios,%20valida%C3%A7%C3%A3o%20e%20atributos/61-input-attributes/index.html"
  },
  {
    "n": 62,
    "title": "Placeholder, Required e Autofocus",
    "path": "Nível 9 — Formulários, validação e atributos/62-placeholder-required-autofocus/index.html",
    "url": "N%C3%ADvel%209%20%E2%80%94%20Formul%C3%A1rios,%20valida%C3%A7%C3%A3o%20e%20atributos/62-placeholder-required-autofocus/index.html"
  },
  {
    "n": 63,
    "title": "Validação com Min, Max e Step",
    "path": "Nível 9 — Formulários, validação e atributos/63-validacao-min-max-step/index.html",
    "url": "N%C3%ADvel%209%20%E2%80%94%20Formul%C3%A1rios,%20valida%C3%A7%C3%A3o%20e%20atributos/63-validacao-min-max-step/index.html"
  },
  {
    "n": 64,
    "title": "Pattern",
    "path": "Nível 9 — Formulários, validação e atributos/64-pattern/index.html",
    "url": "N%C3%ADvel%209%20%E2%80%94%20Formul%C3%A1rios,%20valida%C3%A7%C3%A3o%20e%20atributos/64-pattern/index.html"
  },
  {
    "n": 65,
    "title": "Input Form Attributes",
    "path": "Nível 9 — Formulários, validação e atributos/65-input-form-attributes/index.html",
    "url": "N%C3%ADvel%209%20%E2%80%94%20Formul%C3%A1rios,%20valida%C3%A7%C3%A3o%20e%20atributos/65-input-form-attributes/index.html"
  },
  {
    "n": 66,
    "title": "Formulário completo de matrícula",
    "path": "Nível 9 — Formulários, validação e atributos/66-formulario-matricula/index.html",
    "url": "N%C3%ADvel%209%20%E2%80%94%20Formul%C3%A1rios,%20valida%C3%A7%C3%A3o%20e%20atributos/66-formulario-matricula/index.html"
  },
  {
    "n": 67,
    "title": "Três maneiras de aplicar CSS",
    "path": "Nível 10 — CSS intermediário/67-maneiras-aplicar-css/index.html",
    "url": "N%C3%ADvel%2010%20%E2%80%94%20CSS%20intermedi%C3%A1rio/67-maneiras-aplicar-css/index.html"
  },
  {
    "n": 68,
    "title": "Sintaxe, seletores, cores e comentários",
    "path": "Nível 10 — CSS intermediário/68-sintaxe-seletores-cores/index.html",
    "url": "N%C3%ADvel%2010%20%E2%80%94%20CSS%20intermedi%C3%A1rio/68-sintaxe-seletores-cores/index.html"
  },
  {
    "n": 69,
    "title": "Background, Border, Margin e Padding",
    "path": "Nível 10 — CSS intermediário/69-background-border-margin-padding/index.html",
    "url": "N%C3%ADvel%2010%20%E2%80%94%20CSS%20intermedi%C3%A1rio/69-background-border-margin-padding/index.html"
  },
  {
    "n": 70,
    "title": "Página completa de inscrição em curso",
    "path": "Nível 11 — Projeto Integrador/70-projeto-inscricao-curso/index.html",
    "url": "N%C3%ADvel%2011%20%E2%80%94%20Projeto%20Integrador/70-projeto-inscricao-curso/index.html"
  }
];
  var script = document.querySelector('script[data-exercise-nav]');
  if (!script) return;

  var rootUrl = new URL('../', script.src);
  var styleUrl = new URL('../css/exercise-nav.css', script.src);
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = styleUrl.href;
  document.head.appendChild(link);

  var currentPath = decodeURIComponent(location.pathname).replace(/\\/g, '/');
  var currentIndex = -1;

  for (var i = 0; i < exercises.length; i++) {
    var item = exercises[i];
    var itemPath = decodeURIComponent(item.path).replace(/\\/g, '/');
    var itemDir = itemPath.replace(/\/index\.html$/, '');
    if (currentPath === itemPath || currentPath.indexOf('/' + itemDir + '/') !== -1) {
      currentIndex = i;
      break;
    }
  }

  if (currentIndex === -1) return;

  function exerciseUrl(item) {
    return new URL(item.url, rootUrl).href;
  }

  function makeButton(target, direction) {
    var isPrevious = direction === 'previous';
    var label = isPrevious ? '\u2190 Anterior' : 'Pr\u00f3ximo \u2192';
    var item = exercises[target];

    if (!item) {
      var span = document.createElement('span');
      span.className = 'exercise-nav-btn is-disabled';
      span.setAttribute('aria-disabled', 'true');
      span.textContent = label;
      return span;
    }

    var anchor = document.createElement('a');
    anchor.className = 'exercise-nav-btn';
    anchor.href = exerciseUrl(item);
    anchor.textContent = label;
    anchor.setAttribute('aria-label', (isPrevious ? 'Exerc\u00edcio anterior: ' : 'Pr\u00f3ximo exerc\u00edcio: ') + formatNumber(item.n) + ' \u2014 ' + item.title);
    return anchor;
  }

  function formatNumber(number) {
    return number < 10 ? '0' + number : String(number);
  }

  var nav = document.createElement('nav');
  nav.className = 'exercise-nav';
  nav.setAttribute('aria-label', 'Navega\u00e7\u00e3o entre exerc\u00edcios');

  var inner = document.createElement('div');
  inner.className = 'exercise-nav-inner';

  var previous = makeButton(currentIndex - 1, 'previous');
  var next = makeButton(currentIndex + 1, 'next');

  var label = document.createElement('label');
  label.className = 'exercise-nav-select';

  var labelText = document.createElement('span');
  labelText.textContent = 'Ir para o exerc\u00edcio';
  label.appendChild(labelText);

  var select = document.createElement('select');
  select.setAttribute('aria-label', 'Escolher um exerc\u00edcio');

  for (var j = 0; j < exercises.length; j++) {
    var optionItem = exercises[j];
    var option = document.createElement('option');
    option.value = exerciseUrl(optionItem);
    option.textContent = formatNumber(optionItem.n) + ' \u2014 ' + optionItem.title;
    if (j === currentIndex) option.selected = true;
    select.appendChild(option);
  }

  select.addEventListener('change', function () {
    if (select.value) location.href = select.value;
  });

  label.appendChild(select);
  inner.appendChild(previous);
  inner.appendChild(label);
  inner.appendChild(next);
  nav.appendChild(inner);

  var footer = document.querySelector('.page-footer, .site-footer, .rodape');
  if (footer && footer.parentNode) {
    footer.parentNode.insertBefore(nav, footer);
  } else {
    document.body.appendChild(nav);
  }
})();
