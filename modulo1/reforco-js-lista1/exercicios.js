// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt("Digite a altura do retangulo")
const largura = prompt("Digite a largura do retangulo")

console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite o ano atual")
  const anoDeNascimento = prompt("Digite  o seu ano de nascimento")

  console.log(anoAtual - anoDeNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

return(peso / (altura * altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt ("Digite seu nome")
  const idade = prompt  ("Digite sua idade")
  const email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
 const coresFavoritas1 = prompt("Digite sua cor favorita")
 const coresFavoritas2 = prompt ("Digite sua cor favorita")
 const coresFavoritas3 = prompt("Digite sua cor favorita")
 const arrayDeCores = [coresFavoritas1,coresFavoritas2,coresFavoritas3]
 console.log(arrayDeCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return (string.toUpperCase())
   
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return (string1.length === string2.length)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return (array[0]);
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return (array.pop());
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const primeiroNumero = array[0]
const ultimoNumero = array[array.length - 1]
  
array[0] = ultimoNumero
array[array.length - 1] = primeiroNumero
  
return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return (string1.toLowerCase() == string2.toLowerCase())


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const ano =Number(prompt("Digite o ano atual"))
const anoNascimento =Number(prompt("Digite o ano de seu nascimento"))
const carteiraIdentidade =Number(prompt("Digite o ano que sua carteira de identidade foi emitida"))

 const idade = ano - anoNascimento
 const tempoDaCarteira = ano - carteiraIdentidade
 const condicao1 = idade <= 20 && tempoDaCarteira >= 5
 const condicao2 = idade > 20 && idade <= 50 && tempoDaCarteira>=10
 const condicao3 = idade > 50 && tempoDaCarteira >=15
 
 console.log( condicao1 || condicao2 ||condicao3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui
    const maiorDeIdade = prompt("Você tem mais de 18 anos?")
    const ensinoMedio = prompt("Você possui ensino médio completo?")
    const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
 
    console.log(maiorDeIdade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim")


}