const frm = document.querySelector("#frmNPerfeito");

frm.addEventListener("submit", function(e) {
    e.preventDefault();

    const numero = Number(document.querySelector("#inNumero").value);

    let soma = 0;
    let divisores = "";

    for (let i = 1; i < numero; i++) {

        if (numero % i == 0) {
            soma = soma + i;
            divisores = divisores + i + ", ";
        }
    }

    document.querySelector("#outResposta").innerText =
        "Divisores de " + numero + ": " + divisores + "(Soma: " + soma + ")\n" +
        numero + (soma == numero ? " É um Número Perfeito" : " NÃO é um Número Perfeito");
});