let data = new Date();
let dataAtual = data.getTime();

const carteiraNova = (nascimento: string, identidade: string): boolean => {
     let dNascimento =  new Date(nascimento);
     let dIdentidade =  new Date(identidade);
     let idade = data.getFullYear() - dNascimento.getFullYear();
     let tempoCarteira = data.getFullYear() - dIdentidade.getFullYear();

     if(idade <= 20){
        return tempoCarteira >= 5 ? true : false;
     }else if(idade > 20 && idade <= 50){
         return tempoCarteira >= 10 ? true : false;
     }else{
         return tempoCarteira >= 15 ? true : false;
     }

}


console.log(carteiraNova('06/08/2020', '30/06/2021'));