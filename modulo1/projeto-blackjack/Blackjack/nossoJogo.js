// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros


// console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
// console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)


console.log("Boas vindas ao jogo de Blackjack!")

const usuarioJogador = comprarCarta()
const somaUsuario = comprarCarta()
const computadorJogador = comprarCarta()

if (confirm("Quer iniciar uma nova rodada?")) {
   confirm = true

   console.log(`Usuario: Cartas-${usuarioJogador.texto} ${usuarioJogador.texto}  Pontuacao - ${usuarioJogador.valor + usuarioJogador.valor}`)
   console.log(`Usuario: Cartas-${computadorJogador.texto}  ${computadorJogador.texto}  Pontuacao - ${computadorJogador.valor + computadorJogador.valor}`)



   if (usuarioJogador.valor < computadorJogador.valor) {
      console.log('UsuarioJogador perdeu!')
   } else if (usuarioJogador.valor > computadorJogador.valor) {
      console.log('computador ganhou!')
   } else
      console.log('Empate!')

} else {
   console.log("O jogo acabou!")
}





