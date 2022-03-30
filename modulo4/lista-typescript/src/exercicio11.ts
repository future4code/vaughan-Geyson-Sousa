const nRomanos: Obj[] = [
    { letra: "M", valor: 1000 },
    { letra: "CM", valor: 900 },
    { letra: "D", valor: 500 },
    { letra: "CD", valor: 400 },
    { letra: "C", valor: 100 },
    { letra: "XC", valor: 90 },
    { letra: "L", valor: 50 },
    { letra: "XL", valor: 40 },
    { letra: "X", valor: 10 },
    { letra: "IX", valor: 9 },
    { letra: "V", valor: 5 },
    { letra: "IV", valor: 4 },
    { letra: "I", valor: 1 },
  ];
  
  type Obj = {
      letra: string,
      valor: number
  }
  
  const converter= (numero: number): string => {
    if (numero > 3000) {
      return "insira um numero menor que 3000";
    }
  
    let letras: string[] = [];
    let numeros: number = numero;
    let arr: number = 0;
  
    while (arr < 10){
      for (let i = 0; i < nRomanos.length; i++){
        if (numeros >= nRomanos[i].valor) {
          letras.push(nRomanos[i].letra);
          numeros -= nRomanos[i].valor;
          break;
        }
      }
  
      arr++;
    }
  
    return letras.join("");
  };
  
  console.log(converter(2121));