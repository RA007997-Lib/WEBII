const form = document.querySelector("#frmVelocidade");
const resp = document.querySelector("#outResposta");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const permitida = Number(document.getElementById('inPermitida').value);
    const condutor = Number(document.getElementById('inCondutor').value);

    const limiteLeve = permitida * 1.2; 

    let situacao;

    if (condutor <= permitida) {
        situacao = "Sem Multa";
    } else if (condutor <= limiteLeve) {
        situacao = "Multa Leve";
    } else {
        situacao = "Multa Grave";
    }

    resp.innerText = "Situação: " + situacao;
});
  