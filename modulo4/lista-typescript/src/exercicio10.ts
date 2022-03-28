const validar = (cpf: string): boolean => {

    
   var tipoCPF = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/;
   var cpfNovo = tipoCPF.test(cpf);
   var pontos: boolean;

   
   if(cpf[3] === '.' && cpf[7] === '.' && cpf[11] === '-'){
       pontos = true;
   }

   const novo: any = cpf.split("")

   let out = /\d/g;

   let nn = cpf.match(out).join('');

   let nn2 = nn.split("");

   const repetidos = nn2.every((item: string, index: number, arr: string[]): boolean => {
       return item === arr[0];
   })

   if(pontos && cpfNovo && !repetidos){
      return true;
   }


   return false;

}


console.log(validar('051.147.325-05'));