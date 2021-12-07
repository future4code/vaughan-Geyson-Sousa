// exercicio numero 1- interpretação//

/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/* a) o codigo irá pedir ao usuario que digite,
 um numero, e se esse numero for,
 divisivel por 2 com o resto igual a 0,
 irá imprimir a frase 'passou no teste', se o numero não for divisivel por 2,
 então irá imprimir a frase' não passou no teste'.*/

// b) para numeros de natureza 'par'.//

// c) para numeros de natureza 'impar'.//

// exercicio numero 2- interpretação//

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/* a) para informar ao usuario o preço das frutas*/

// b)O preço da fruta maçã é 2.25.//

// c)O preço da fruta Pêra é 5.//


//exercicio numero 3- interpretação//

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
  let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

/* a) a primeira linha pede ao usuario,
 que digite um numero*/

/*b) a mensagem será' esse numero passou no teste,
se for =10 dará error pois não tem outra condição*/

/*c) haverá, pois só foi declarada uma condição, e
se o numero que o usuario digitar for menor que 0,
como não tem nenhuma condição, a resposta será um
erro*/

//EXERCICIO NUMERO 1- ESCRITA//

/*let idadeUsuario = prompt('qual é a sua idade?')
  let numero = Number(idadeUsuario)
  
  if (numero >= 18) {
    console.log('pode dirigir')

} else {
    console.log('não pode dirigir')
}*/

//EXERCICIO NUMERO 2- ESCRITA//

/*const turnoEstudo = prompt('Qual o seu turno de estudo? Digite M para Matutino, digite V para vespertino, digite N para noturno.')

if (turnoEstudo === 'M') {
  console.log('Bom dia')
}
else if (turnoEstudo === 'V') {
  console.log('Boa tarde')
}
else if (turnoEstudo === 'N') {
  console.log('Boa noite')
}*/

//EXERCICIO NUMERO 3- ESCRITA//
/*const turnoEstudo = prompt('Qual o seu turno de estudo? Digite M para Matutino, digite V para vespertino, digite N para noturno.')
switch (turnoEstudo) {
  case 'M':
  console.log('Bom dia')
  break;
  case 'V':
  console.log('Boa tarde')
  break;
  case 'N':
  console.log('Boa noite')
  break;
}*/

//EXERCICIO NUMERO 4- ESCRITA//
const generoFilme = prompt('Digite o genero do filme')
const valorIngresso = prompt('Qual o preço do ingresso?')

if (generoFilme ==='fantasia' && valorIngresso <= 15) {
  console.log('Bom filme')
}
else {
   console.log('Escolha outro filme')
}