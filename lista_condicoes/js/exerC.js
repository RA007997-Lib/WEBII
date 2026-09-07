       const tabela = [
      { valor: 1.00, tempo: 30 },
      { valor: 1.75, tempo: 60 },
      { valor: 3.00, tempo: 120 }
    ];

    function calcular() {
      const valor = parseFloat(document.getElementById('valor').value);
      const resultado = document.getElementById('resultado');

      if (valor < tabela[0].valor) {
        resultado.innerHTML = "Valor Insuficiente";
        return;
      }

      let faixaEscolhida = tabela[0];
      for (let i = 0; i < tabela.length; i++) {
        if (valor >= tabela[i].valor) {
          faixaEscolhida = tabela[i];
        }
      }

      const troco = valor - faixaEscolhida.valor;

      resultado.innerHTML =
        "Tempo: " + faixaEscolhida.tempo + " min<br>" +
        "Troco R$: " + troco.toFixed(2);
    }

    calcular();
