//EXERCICIO NUMERO 1 - INTERPRETACAO

 const usuarios = [
     { nome: "Amanda Rangel", apelido: "Mandi" },
     { nome: "Laís Petra", apelido: "Laura" },
     { nome: "Letícia Chijo", apelido: "Chijo" }
   ]

  const novoArrayA = usuarios.map((item,index,array)  => {
     console.log(index,item,array)
  })

// A) CADA NOME COM OS SEUS RESPECTIVOS APELIDOS, e indice e por fim o array completo

//EXERCICIO NUMERO 2 - INTERPRETACAO

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]

  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })

  console.log(novoArrayB)

// A) O CODIGO IRA IMPRIMIR OS NOMES DE CADA ITEM SEM OS APELIDOS

//EXERCICIO NUMERO 3 - INTERPRETACAO

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]

  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })

  console.log(novoArrayC)

// A )  o codigo acima irá imprimir no console todos os elementos do array com excesssao da leticia chijo e seu apelido e seu indice

//EXERCICIO NUMERO 1 - ESCRITA

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]
// A)

const novoArrayNomes = pets.map ((item,index, array) => {
     return item.nome })

console.log(novoArrayNomes);


// B)

const novoArrayCachorroSalsicha = pets.filter ((item,index, array) => {
    return item.raca === 'Salsicha'
})
console.log ( novoArrayCachorroSalsicha);


//c) 
    const somentePoodles = pets.filter((item, index, array) => {
    return item.raca === 'Poodle'
})
    const novoArray = somentePoodles.map ((item, index, array) => {
    return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
}) 

 console.log (novoArray)
      

// //EXERCICIO NUMERO 2 - ESCRITA

 const produtos = [
     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
  ]




// A)
const novoArrayNomes1 = produtos.map ((item,index, array) => {
          return item.nome })
    
     console.log(novoArrayNomes1);

//B)

//c)
  
const somenteBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
console.log(somenteBebidas);

//D)
const produtosComNomeYpe = produtos.filter((nome) => {
    return nome.nome.includes("Ypê")

})
console.log(produtosComNomeYpe)