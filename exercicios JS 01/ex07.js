const frm = document.querySelector("form")

const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {

    const produto = frm.inProduto.value
    const preço = Number(frm.inPreco.value)

    const promocao = (preço * 2) + (preço / 2)

    resp1.innerText = `Promoção: ${produto}`
    resp2.innerText = `Leve 3 unidades por apenas R$ ${promocao.toFixed(2)}`

    e.preventDefault()
})