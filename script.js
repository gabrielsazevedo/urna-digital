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

function confirmar() {
    
    switch (num) {
        case "12":
            alert("Você votou em Ivete Sangalo!");
            break;
        case "21":
            alert("Você votou em Leo Santana!");
            break;
        case "32":
            alert("Você votou em Wilson Café!");
            break;
        case "23":
            alert("Você votou em Glaucya Boechat!");
            break;
        case "40":
            alert("Você votou em Negão da Viola!");
            break;
        default:
            alert("Candidato não existente, tente novamente!");
    }

    corrigir();

}