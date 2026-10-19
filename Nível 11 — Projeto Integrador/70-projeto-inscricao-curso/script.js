const form = document.getElementById('form-inscricao');
const status = document.getElementById('form-status');
const nome = document.getElementById('nome-inscricao');
const email = document.getElementById('email-inscricao');
const curso = document.getElementById('curso-inscricao');
const turno = document.getElementById('turno-inscricao');
const termos = form.querySelector('input[name="termos"]');

const campos = [nome, email, curso, turno, termos];

function limparErro(campo) {
    const wrapper = campo.closest('.field');
    const mensagem = wrapper.querySelector('.error');
    wrapper.classList.remove('invalid');
    if (mensagem) {
        mensagem.textContent = '';
    }
}

function mostrarErro(campo, texto) {
    const wrapper = campo.closest('.field');
    const mensagem = wrapper.querySelector('.error');
    wrapper.classList.add('invalid');
    if (mensagem) {
        mensagem.textContent = texto;
    }
}

function validarCampo(campo) {
    if (campo.type === 'checkbox') {
        if (!campo.checked) {
            mostrarErro(campo, 'Marque o aceite dos termos para continuar.');
            return false;
        }
        limparErro(campo);
        return true;
    }

    if (!campo.value.trim()) {
        mostrarErro(campo, 'Preencha este campo.');
        return false;
    }

    if (campo.type === 'email' && !campo.value.includes('@')) {
        mostrarErro(campo, 'Informe um e-mail válido.');
        return false;
    }

    limparErro(campo);
    return true;
}

campos.forEach(function (campo) {
    campo.addEventListener('input', function () {
        limparErro(campo);
        status.textContent = '';
    });

    campo.addEventListener('change', function () {
        limparErro(campo);
        status.textContent = '';
    });
});

form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    let valido = true;
    campos.forEach(function (campo) {
        if (!validarCampo(campo)) {
            valido = false;
        }
    });

    if (!valido) {
        status.textContent = 'Revise os campos destacados antes de confirmar.';
        return;
    }

    status.textContent = 'Inscrição confirmada para ' + nome.value.trim() + '! Em breve entraremos em contato.';
    form.reset();
    campos.forEach(limparErro);
});
