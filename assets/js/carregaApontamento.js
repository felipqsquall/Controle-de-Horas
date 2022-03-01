import { Apontamento } from "./adiciona.js"
export const carregaApontamento = () => {

    const lista = document.querySelector('[data-list]');

    const apontamentoCadastrado = JSON.parse(localStorage.getItem("Apontamento")) || []

    lista.innerHTML = " "

    apontamentoCadastrado.forEach((apontamento) => {
        lista.appendChild(Apontamento(apontamento))

    })

}