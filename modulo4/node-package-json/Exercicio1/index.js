// a) acessamos os parametros usamos o  comando process.argv 
// Letra B e C
const nome = process.argv[2]
const idade = process.argv[3]
const idadeNova = Number(idade)+7

console.log(`Olá, ${nome} ! Você tem ${idade} anos. Em sete anos você terá ${idadeNova}`)