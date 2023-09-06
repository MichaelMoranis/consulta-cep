export default function chamarAPI(cep) {
    const resultado = document.querySelector(".resultado");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => resposta.json())
    .then(data => {
       if(data.erro) {
        resultado.innerHTML = "nao foi possivel consultar o seu cep";
       } if(data.localidade === "Cascavel") {
        resultado.innerHTML = `
        <p><strong>bairro: </strong>${data.bairro}</p>
        <p><strong>cidade: </strong>${data.localidade}</p>
        <p><strong>logradouro: </strong>${data.logradouro}</p>
        <p><strong>estado: </strong>${data.uf}</p>
        <h2> Parabens voce mora na melhor cidade!!!</h2>
        `;
       } else {
        resultado.innerHTML = `
        <p><strong>bairro: </strong>${data.bairro}</p>
        <p><strong>cidade: </strong>${data.localidade}</p>
        <p><strong>logradouro: </strong>${data.logradouro}</p>
        <p><strong>estado: </strong>${data.uf}</p>
        `;
       }
    }).catch(error => {
        resultado.innerHTML = "<h3>nao foi possivel buscar o cep informado, tente novamente !!!</h3>", error;
    })
}

