let num = "";

function atualizarTela() {

    const tela = document.querySelector(".campovisor");
    tela.textContent = num;

}

function teclar(digito) {

    if (num.length == 2) {

        alert(num);
        return;

    }

    num += digito;
    atualizarTela();

}