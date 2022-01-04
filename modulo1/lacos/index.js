//EXERCICIO NUMERO 1- INTERPRETAÇÃO//

let valor = 0
for(let i = 0; i < 5; i++) {
valor += i
}
console.log(valor)

// O codigo irá somar o valor da sua propria variavel +1 que resultará em //

//EXERCICIO NUMERO 2- INTERPRETAÇÃO//

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
        console.log(numero)
    }
}

// a) o console ira imprimir todos os numeros apos o numero 18
// b) não.

//EXERCICIO NUMERO 3- INTERPRETAÇÃO//
   const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
}

// o codigo irá imprimir 4 sequencias de asteriscos.

//EXERCICIO NUMERO 1- ESCRITA//

let quantidadeBichinhosDeEstimacao = Number(prompt("Quantos bichinhos de estimacao voce tem ?"))
let bichinhosDeEstimacao = []
if (quantidadeBichinhosDeEstimacao <= 0) {
    console.log('Que pena! Você pode adotar um pet!')
}
else if (quantidadeBichinhosDeEstimacao > 0) {
    for (let nomes = 0; nomes < quantidadeBichinhosDeEstimacao; nomes++) {
        bichinhosNomes = prompt('Quais os nomes dos bichinhos?')
    bichinhosDeEstimacao.push(bichinhosNomes)
    }
}
console.log(bichinhosDeEstimacao)





