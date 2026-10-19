const mensagem = document.getElementById('mensagem');
const botaoMensagem = document.getElementById('btn-mensagem');
const contador = document.getElementById('contador');
const botaoIncrementar = document.getElementById('btn-incrementar');
const botaoZerar = document.getElementById('btn-zerar');
const dataHora = document.getElementById('data-hora');
const botaoAtualizar = document.getElementById('btn-atualizar');

let total = 0;
let mensagemAlterada = false;

botaoMensagem.addEventListener('click', function () {
    mensagemAlterada = !mensagemAlterada;
    if (mensagemAlterada) {
        mensagem.textContent = 'Muito bem! Você acabou de executar uma função JavaScript.';
    } else {
        mensagem.textContent = 'Clique no botão para alterar este texto.';
    }
});

botaoIncrementar.addEventListener('click', function () {
    total = total + 1;
    contador.textContent = total;
});

botaoZerar.addEventListener('click', function () {
    total = 0;
    contador.textContent = total;
});

function mostrarDataHora() {
    const agora = new Date();
    dataHora.textContent = agora.toLocaleString('pt-BR');
}

botaoAtualizar.addEventListener('click', mostrarDataHora);
mostrarDataHora();
