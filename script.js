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

    const fotocandidato = document.getElementById("fotocandidato");
    const stringscandidato = document.getElementById("stringscandidato");


    switch (num) {
        case "12":
            fotocandidato.src = "https://yt3.googleusercontent.com/0vptru8uklux9U_aDNrF1UgbsZ-Fq5kxauWGBLzBmNWZR4MNDThawCNRErYFg2V1A888N9ZnohU=s900-c-k-c0x00ffffff-no-rj"
            stringscandidato.get = "12 - Ivete Sangalo, MPB";
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
        fotocandidato.src = "";
        stringscandidato = "";
            alert("Candidato não existente, tente novamente!");
    }

    corrigir();

}

function branco() {

    alert("Você votou em branco!");
    corrigir();

}