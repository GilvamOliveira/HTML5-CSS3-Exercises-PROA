const satisfacao = document.getElementById('satisfacao');
const valorSatisfacao = document.getElementById('valor-satisfacao');

function atualizarValor() {
    valorSatisfacao.textContent = satisfacao.value;
}

satisfacao.addEventListener('input', atualizarValor);
atualizarValor();
