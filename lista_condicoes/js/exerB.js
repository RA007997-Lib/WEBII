 function verificarVelocidade() {
      const permitida = parseFloat(document.getElementById('permitida').value);
      const condutor = parseFloat(document.getElementById('condutor').value);
      const resultado = document.getElementById('resultado');

      const limiteLeve = permitida * 1.2; // até 20% acima da permitida

      let situacao;
      if (condutor <= permitida) {
        situacao = "Sem Multa";
      } else if (condutor <= limiteLeve) {
        situacao = "Multa Leve";
      } else {
        situacao = "Multa Grave";
      }

      resultado.textContent = "Situação: " + situacao;
    }

    
    verificarVelocidade();