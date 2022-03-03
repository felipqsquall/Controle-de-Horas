import { carregaApontamento } from "./carregaApontamento.js";


export const novoItem = (evento) => {
  evento.preventDefault()  
  const apontamento = JSON.parse(localStorage.getItem('Apontamento')) || []
  //const lista = document.querySelector('[data-list]')
  const inputdate = document.getElementsByName("data");
  const date = moment(inputdate[0].value);
  const inputinicio = document.getElementsByName("inicio");
  const inicio = inputinicio[0].value
  const inputintervalo = document.getElementsByName("intervalo");
  const intervalo = inputintervalo[0].value;
  const inputfinal = document.getElementsByName("final");
  const final = inputfinal[0].value;
  const inputparceiro = document.getElementsByName("parceiro");
  const parceiro = inputparceiro[0].value;
  const inputos = document.getElementsByName("OS");
  const os = inputos[0].value;
  const dataformatada = date.format('DD/MM/YYYY');


  const dados = {
    dataformatada,
    inicio,
    intervalo,
    final,
    parceiro,
    os,
  }

  const apontamentoAtualizado = [...apontamento, dados]

  //const criaApontamento = criarApontamento(dados)
  //lista.appendChild(criaApontamento)

  localStorage.setItem('Apontamento', JSON.stringify(apontamentoAtualizado));
  inputdate.value = " "

  carregaApontamento()
    
}

export const Apontamento = ({dataformatada, inicio, intervalo, final, parceiro, os}) => {
  const apontamento = document.createElement('tr')
  const conteudo = `<td>${dataformatada}</td> <td>${inicio}</td> <td>${intervalo}</td> <td>${final}</td> <td>${parceiro}</td> <td>${os}</td> <td><button class="button is-info is-small">Editar</button></td>`;
  apontamento.innerHTML = conteudo;

  return apontamento;

}