const form = document.querySelector("form");
const resp = document.querySelector("#outResposta");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio do formulário e recarregamento da página

    const numero = Number(form.inNumero.value);

    if (numero % 2 === 0) {
        resp.innerText = `${numero} é Par`;
    } else {
        resp.innerText = `${numero} é Ímpar`;
    }
});