let num = "";

function atualizarTela() {
    
    const tela = document.querySelector(".campovisor");
    tela.textContent = num;

}

function teclar(digito) {

    if (num.length == 2) {

        return;

    }

    num += digito;
    atualizarTela();

}

function corrigir() {

    num = "";
    atualizarTela();

}

