//QUESTÃO 1 - INTERPRETAÇÃO
let array
console.log('a. ', array)// undefined

array = null
console.log('b. ', array)// null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)// 11

let i = 0
console.log('d. ', array[i])// 3

array[i+1] = 19
console.log('e. ', array)// [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)// 9

// QUESTÃO 2 - INTERPRETAÇÃO
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)// SUBI NUM ONIBUS EM MIRROCOS? / A FRASE.LENGTH= 27.


// QUESTÃO 1 - ESCRITA
const nomeUsuario = prompt ('Qual é o seu nome?');
const emailUsuario = prompt ('Qual é o seu email?');
const novaFrase = 'O email '+ emailUsuario +' foi cadastrado com sucesso. Seja bem vindo(o) '+ nomeUsuario +'';
console.log(novaFrase) 

// QUESTÃO 2 - ESCRITA 
const minhasComidasPreferidas = ['Lasanha','Macarrão','Arroz','feijão','Salsicha'];
console.log(minhasComidasPreferidas);

const fraseComidas = `Essas são as minhas comidas preferidas:
${minhasComidasPreferidas[0]}
${minhasComidasPreferidas[1]}
${minhasComidasPreferidas[2]}
${minhasComidasPreferidas[3]}
${minhasComidasPreferidas[4]}`;
console.log(fraseComidas);

const comidaDoUsuario = prompt ("Digite sua comida preferida");

minhasComidasPreferidas [1] = comidaDoUsuario;
console.log ("A nova lista é: ", minhasComidasPreferidas);

//QUESTÃO 3 - ESCRITA
const listaDeTarefas = [];
const primeiraTarefa = prompt ("Digite uma tarefa do seu dia a dia");
const segundatarefa = prompt ("Digite outra tarefa");
const terceiraTarefa = prompt ("Digite outra tarefa");

listaDeTarefas.push (primeiraTarefa, segundatarefa, terceiraTarefa);
console.log (listaDeTarefas);

const numeroDigitado = prompt ("Digite o número, entre 0 e 2, da tarefa já realizada");
console.log (numeroDigitado);

const listaFinal = listaDeTarefas.splice (numeroDigitado, 1);
console.log ("A lista final de tarefas é: ", listaDeTarefas);