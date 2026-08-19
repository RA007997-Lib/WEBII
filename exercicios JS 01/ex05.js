const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const valor = preco * 2
    const desconto = valor % 1
    const valorPromocao = valor - desconto

    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Valor da promoção é R$ ${valorPromocao.toFixed(2)}`

    e.preventDefault()
})