// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse(array)
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort (function(a, b) {
        return a - b;
    })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
 
    const numerosPares = array.filter((numero) => {
        if(numero % 2 === 0) {
            return numero
    
        }
    });
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const valor = retornaNumerosPares
     for(let valor of array){
         return (valor)
     }
}
valor(array)

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let numeroMaior = 0
  for (let numArray of array){
      if(numeroMaior < numArray){
          numeroMaior = numArray
      }
  }
return numeroMaior
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maiorNumber = Math.max(num1, num2); 
  
    function verificar (){
      if(Math.max(num1, num2) % Math.min(num1,num2) === 0){
          return true
      }else{
          return false
      }
    }
  
    const diferenca = Math.max(num1, num2) - Math.min(num1,num2)
  
      const nome_do_objeto = {
          maiorNumero: maiorNumber,
          maiorDivisivelPorMenor: verificar(),
          diferenca: diferenca,
      }
  
      return nome_do_objeto
  }



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
    const arrayDePares= []

    for(let i = 0; arrayDePares.length < n; i++) {
        if(i  % 2 === 0) {
            arrayDePares.push(i)
        }
    }
    return arrayDePares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA == ladoB && ladoA ==ladoC){
    return "Equilátero"
} else if ( ladoA ==ladoB || ladoA ==ladoC || ladoB== ladoC ){
    return "Isósceles"
} else {
    return "Escaleno"
}

}



// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filmeConvite = {
        nome: 'O Diabo Veste Prada',s
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
    return (`Venha assistir ao filme ${filmeConvite.nome}, de ${filmeConvite.ano}, dirigido por ${filmeConvite.diretor} e estrelado por ${filmeConvite.atores[0]}, ${filmeConvite.atores[1]}, ${filmeConvite.atores[2]}, ${filmeConvite.atores[3]}.`)
}



// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const novaPessoa = {
    ...pessoa, 
    nome:"ANÔNIMO"
   }
   return novaPessoa
} 
    

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}