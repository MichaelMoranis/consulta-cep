import chamarAPI from "./js/consultaCep.js";

function consultarCep() {
    const cep = document.getElementById("cep");
    const cepInput = cep.value.replace(/\.|\-/g, '');
    if (cepInput.legnth !== 8) {
        const cepChamada = cep.value;
        chamarAPI(cepChamada);
        cep.value = "";
    } else {
        alert("formato de cep invalido, digite o cep novamente !!");
    }
}

const button = document.getElementById("button");

button.addEventListener("click", consultarCep);

