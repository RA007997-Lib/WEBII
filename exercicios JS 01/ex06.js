const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const quantidade = Math.ceil(tempo / 15)
    const total = quantidade * valor

    resp1.innerText = `Valor a pagar: R$ ${total.toFixed(2)}`

    e.preventDefault()
})