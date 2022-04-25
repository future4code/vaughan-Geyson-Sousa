
//respostas com codigos das  questôes de HERANÇAS e POLIMORFISMO

// HERANÇAS

// Questão 1

// a) Apenas se ela tivesse atribuida a um setor

// b) uma vez


// const user1 = new User("02", "g@email.com", "geyson", "147852")

// console.log(user1.getId())
// console.log(user1.getName())
// console.log(user1.getEmail())


// Questão 2

// a) Uma vez

// b) Duas. Uma foi da classe user e outra na Customer, pois a classe customer está pegando infos do constructor da classe User.

// const customer1 = new Customer("03", "email@email.com", "gey", "123456", "100")

// Questão 3

// a) Não pois password é um atributo privado, apenas colocando um metodo get dentro da classe User


// console.log(customer1.getId())
// console.log(customer1.getEmail())
// console.log(customer1.getName())
// console.log(customer1.purchaseTotal)
// console.log(customer1.getCreditCard())

// Questão 4

// public introduceYourself(): string {
//     return `Olá,sou ${this.name} bom dia!`
// }

//const user1 = new User("02", "g@email.com", "geyson", "147852")

// user1.introduceYourself()


// Questão 5

//  public introduceYourself(): string {
//     return `Olá, sou ${this.name} bom dia!`
// }



// POLIMORFISMO

// Questão 1

// a) Sâo todas. Não. por se tratar de um objeto

export interface Client {
    name: string;  
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
}

const client: Client = {
    name: "Geyson",
    registrationNumber: 2,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2;
    }

}

console.log(client.name)
console.log(client.registrationNumber)
console.log(client.consumedEnergy)
console.log(client.calculateBill())

//Questão 2

// a) "Não é possível criar uma instância em uma classe abstrata."

// b) Adicionando uma classe filha.

export abstract class Place {
    constructor(protected cep: string) {}

      public getCep(): string {
          return this.cep;
    }
}

// Questão 3

// a) È preciso declarar uma classe filha e criar uma instância dessa última.

// b) Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

// c) Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

export class Residence extends Place {
    constructor(
      private residentsQuantity: number,
      cep: string
    ) {
      super(cep);
    }
    getResidentsQuantity(): number {
        return this.residentsQuantity;
    }
  }

  export class Commerce extends Place {
    constructor(
      private floorsQuantity: number,
      cep: string) {
      super(cep);
    }
    getFloorsQuantity(): number {
        return this.floorsQuantity;
    }
  }

  export class Industry extends Place {
    constructor(
      private machinesQuantity: number, 
      cep: string) {
          super(cep);
    }
    getMachinesQuantity(): number {
        return this.machinesQuantity;
    }
  }

// Questão 4

// a)  foi usado metodo getCpf para pegar o cpf e calculateBill para calcular a luz.

class ResidentialClient extends Residence implements Client {

    constructor(
        public name: string, 
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        cep: string,
        residentsQuantity: number,
        ){
        super(residentsQuantity, cep)
        }

    getCpf(): string {
        return this.cpf 
    }

    calculateBill(): number{
        return this.consumedEnergy * 0.75
    }
}

// Questão 5

// a) As duas tem como implements o client, e o constructor são da maioria todos iguais

// b) A residential é cpf e na comercial é cpnj elas são filhas de pais diferente e o valor que é calculado o consumo de energia
// é diferente 

class CommercialClient  extends Commerce implements Client {

    constructor(
        public name: string, 
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        cep: string,
        machinesQuantity: number,
        ){
        super(machinesQuantity, cep)
        }

    getCnpj(): string {
        return this.cnpj 
    }

    calculateBill(): number{
        return this.consumedEnergy * 0.53
    }
}

// Questão 6

// a) Da classe Industry, pois é um cliente industruial então é lógico ser filha da classe Industry.

// b) IndustryNumber que é o numero de registro, para indentificação, iguais como: cpf ou cnpj.

// c) Pois apenas o  numero de resgitro ta privado e ele é um valor fixo.

class IndustrialClient extends Industry implements Client {

    constructor(
        public name: string, 
        public registrationNumber: number,
        public consumedEnergy: number,
        private insdustryNumber: string,
        cep: string,
        machinesQuantity: number,
        ){
        super(machinesQuantity, cep)
        }

    getInsdustryNumber(): string {
        return this.insdustryNumber 
    }


    calculateBill(): number{
        return this.consumedEnergy * 0.53
    }
}