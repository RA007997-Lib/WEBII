const frm = document.getElementById('frmTriangulo');
const outFormacao = document.getElementById('outFormacao');
const outTipo = document.getElementById('outTipo');

frm.addEventListener('submit', function (e) {
    e.preventDefault();
    verificar();
});

function verificar() {
    const a = parseFloat(document.getElementById('ladoA').value);
    const b = parseFloat(document.getElementById('ladoB').value);
    const c = parseFloat(document.getElementById('ladoC').value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        outFormacao.innerHTML = "Valores inválidos";
        outTipo.innerHTML = "";
        return;
    }

    if (a > b + c || b > a + c || c > a + b) {
        outFormacao.innerHTML = "Lados NÃO podem formar um triângulo";
        outTipo.innerHTML = "";
        return;
    }

    let tipo;
    if (a === b && b === c) {
        tipo = "Equilátero";
    } else if (a === b || a === c || b === c) {
        tipo = "Isósceles";
    } else {
        tipo = "Escaleno";
    }

    outFormacao.innerHTML = "Lados podem formar um triângulo";
    outTipo.innerHTML = "Tipo: " + tipo;
}