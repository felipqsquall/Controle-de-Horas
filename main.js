
import { novoItem } from "./assets/js/adiciona.js"
import { carregaApontamento } from "./assets/js/carregaApontamento.js";
const novoApontamento = document.querySelector('[data-form-button]');

novoApontamento.addEventListener('click', novoItem);

carregaApontamento();