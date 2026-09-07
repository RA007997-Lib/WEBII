function verificar() {

    const numero = parseInt(document.getElementById('numero').value);

    const resultado = document.getElementById('resultado');

    
    let mensagem;

    if (numero % 2 === 0) {
        mensagem = numero + " é par";
    } else {
        mensagem = numero + " é ímpar";
    }

    resultado.textContent = mensagem;
}


verificar();