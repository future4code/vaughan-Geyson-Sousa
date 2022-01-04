// primeira questão -intepretação de codigo 
/* o codigo abaixo irá primeiramente imprimir a posição 1 do array elenco,
 que será o nome Matheus, em seguida o codigo irá imprimir
 o ultimo elemento que será Virginia Cavendish, e por fim,
 o codigo irá imprimir globo 14h.*/

 const filme = {
    nome: "Auto da Compadecida", 
    ano: 2000, 
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        "Virginia Cavendish"
        ], 
    transmissoesHoje: [
        {canal: "Telecine", horario: "21h"}, 
        {canal: "Canal Brasil", horario: "19h"}, 
        {canal: "Globo", horario: "14h"}
        ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//segunda questão- interpretação de codigo 
/*em primeiro  lugar a constante cachorro irá imprimir as propriedades nome,idade,raca,
em seguida a const gato irá imprimir nome:juba, idade: 3, raca: srd.
E por fim a const tartaruga irá imprimir nome: jubo, idade: 3, raca: srd,
A sintaxe ...irá substituir os valores do array anterior.  */

const cachorro = {
    nome: "Juca", 
    idade: 3, 
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// terceira questão -intepretação de codigo
/*a) no backender a resposta será falsa, b) e na altura,por não ter,
sido declarada, a reposta será underfined.*/

function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// exercicio numero 1 - escrita letra a)
const names = {
    nome: "Carlos Eduardo", 
    apelidos: ["Cadu","Dudu", "Edu"]
}
 const novosNames = (names)=> {

console.log(`Eu sou ${names.nome}, mas pode me chamar de: ${names.apelidos[0]}, ${names.apelidos[1]}, ${names.apelidos[2]}`);

 }

// exercicio numero 1 - escrita letra b)
const names1 = {...names, apelidos: ['Edus','Ce','Dud']}
novosNames(names1)

// exercicio numero 2- escrita letra a)

const infoPessoa1 = {
    nome: "Gessyane",
    idade: 23,
    profissao: "Engenheira",
};

const infoPessoa2 = { 
    nome: "Gabriel",
    idade: 28,
    profissao: "Contador",
};

// exercicio numero 2- escrita letra b)

informacoesOriginais = (infoPessoa1, infoPessoa2)

informacoesOriginais1 = [infoPessoa1.nome, infoPessoa1.nome.length, infoPessoa1.idade, infoPessoa1.profissao, infoPessoa1.profissao.length]
informacoesOriginais2 = [infoPessoa2.nome, infoPessoa2.nome.length, infoPessoa2.idade, infoPessoa2.profissao, infoPessoa2.profissao.length]

console.log (informacoesOriginais1, informacoesOriginais2)

// exercicio numero 3 - escrita

var carrinho =[]

objeto1 = {
 nome: 'maça',
 disponibilidade:true

}

objeto2 = {
 nome: 'banana',
 disponibilidade: true

}

objeto3 = {
    nome: 'melao',
    disponibilidade: true
   
}

function frutasObjetos (objeto1,objeto2,objeto3) {
carrinho.push(objeto1)
carrinho.push(objeto2)
carrinho.push(objeto3)

}

frutasObjetos (objeto1, objeto2, objeto3)

console.log (carrinho)