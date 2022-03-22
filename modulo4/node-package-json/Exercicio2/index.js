
const operacao = process.argv[2];
const valor1 =Number(process.argv[3]);
const valor2 = Number(process.argv[4]);
var total 

switch(operacao){
    case "soma":
    total = valor1 + valor2
    break
    case "sub":
    total =  valor1 - valor2
    
}
console.log(`"resultado":${total}`)