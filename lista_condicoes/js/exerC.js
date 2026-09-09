const tabela = [
    { valor: 1.00, tempo: 30 },
    { valor: 1.75, tempo: 60 },
    { valor: 3.00, tempo: 120 }
];

const frm = document.getElementById('frmParquimetro');
const outTempo = document.getElementById('outTempo');
const outTroco = document.getElementById('outTroco');

frm.addEventListener('submit', function (e) {
    e.preventDefault();
    calcular();
});

function calcular() {
    const valor = parseFloat(document.getElementById('valor').value);

    if (isNaN(valor) || valor < tabela[0].valor) {
        outTempo.innerHTML = "Valor Insuficiente";
        outTroco.innerHTML = "";
        return;
    }

    let faixaEscolhida = tabela[0];
    for (let i = 0; i < tabela.length; i++) {
        if (valor >= tabela[i].valor) {
            faixaEscolhida = tabela[i];
        }
    }

    const troco = valor - faixaEscolhida.valor;

    outTempo.innerHTML = "Tempo: " + faixaEscolhida.tempo + " min";
    outTroco.innerHTML = "Troco R$: " + troco.toFixed(2);
}