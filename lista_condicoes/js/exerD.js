
    function verificar() {
      const a = parseFloat(document.getElementById('ladoA').value);
      const b = parseFloat(document.getElementById('ladoB').value);
      const c = parseFloat(document.getElementById('ladoC').value);
      const resultado = document.getElementById('resultado');

      if (a > b + c || b > a + c || c > a + b) {
        resultado.innerHTML = "Lados NÃO podem formar um triângulo";
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

      resultado.innerHTML =
        "Lados podem formar um triângulo<br>" +
        "Tipo: " + tipo;
    }

    verificar();
