const frm = document.querySelector("#frmChinchilas");

frm.addEventListener("submit", function(e) {
    e.preventDefault();

    const chinchilas = Number(document.querySelector("#idChinchilas").value);
    const anos = Number(document.querySelector("#inNumero").value);

    let quantidade = chinchilas;

    for (let i = 1; i <= anos; i++) {

        document.querySelector("#outResposta" + (i - 1)).innerText =
            i + "º Ano: " + quantidade + " Chinchilas";

        quantidade = quantidade * 3;
    }
});