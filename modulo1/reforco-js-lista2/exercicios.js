// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
    
 return array.reverse()

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   
 array.sort(function (a, b) {
   return a - b;
 })
  return array
   

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
 const numerosParesArray = array.filter((par) => {
      if (par % 2 === 0) {
     return par
     }
 });
    return numerosParesArray    

    
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayDeNumeros = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        arrayDeNumeros.push(array[i] * array[i]);
      }
    }
    return arrayDeNumeros;

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numeroMaior = 0;
    for (let indice of array) {
        if (numeroMaior < indice) {
            numeroMaior = indice
        }
    }
    return numeroMaior

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero;
    let menorNumero;
    let maiorDivisivelPorMenor;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;
  
    const diferenca = maiorNumero - menorNumero;
  
    return {
      maiorNumero: maiorNumero,
      maiorDivisivelPorMenor: maiorDivisivelPorMenor,
      diferenca: diferenca
    };


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    const array = [];
    for (let number = 0; array.length < n; number++) {
      if (number % 2 === 0) {
        array.push(number);
      }
    }
    return array;    

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (a !== b && b !== c) {
        return "Escaleno";
      } else if (a === b && b === c) {
        return "Equilátero";
      } else {
        return "Isósceles";
      }    

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let menor = Infinity;
    let maior = -Infinity;
    let segundoMenor = Infinity;
    let segundoMaior = -Infinity;
    let novoArray = [];
  
    for (let contador of array) {
      if (contador < menor) {
        menor = contador;
      }
      if (contador > maior) {
        maior = contador;
      }
    }
  
    for (let contador of array) {
      if (contador < segundoMenor && contador !== menor) {
        segundoMenor = contador;
      }
      if (contador > segundoMaior && contador !== maior) {
        segundoMaior = contador;
      }
    }
    novoArray.push(segundoMaior);
    novoArray.push(segundoMenor);
  
    return novoArray;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    let atoresConcat = "";
    for (let index = 0; index < filme.atores.length; index++) {
      if (index === filme.atores.length - 1) {
        atoresConcat += filme.atores[index];
      } else {
        atoresConcat += filme.atores[index] + ", ";
      }
    }
  
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresConcat}.`;            

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {
        ...pessoa,
        nome: "ANÔNIMO"
      };

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    let pessoasAutorizadas = [];
    for (const pessoa of pessoas) {
      if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
        pessoasAutorizadas.push(pessoa);
      }
    }
    return pessoasAutorizadas;    

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
    let pessoasNaoAutorizadas = [];
    for (const pessoa of pessoas) {
      if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
        pessoasNaoAutorizadas.push(pessoa);
      }
    }
    return pessoasNaoAutorizadas;

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