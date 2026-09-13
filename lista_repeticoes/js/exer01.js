const frm = document.querySelector("#frmFruta");

frm.addEventListener("submit", function(e) {
    e.preventDefault();

    const fruta = document.querySelector("#idFruta").value;
    const numero = Number(document.querySelector("#inNumero").value);

    let resultado = "";

    for (let i = 0; i < numero; i++) {
        resultado += fruta + " * ";
    }

    document.querySelector("#outResposta").innerText = resultado;
});