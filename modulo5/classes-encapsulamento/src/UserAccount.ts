import { Transaction } from './Transaction'

//Questão1

//A) Para determinar as ações que devem ser executadas ao criar 
//uma classe. È chamdo atraves da função constructor.

//B)  A mensagem irá aparecer quantas vezes que o constructor for invocado, no caso, apenas uma.

//C) Através de um método público que retorna 
//as propriedades que iremos acessar.

export class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];

   constructor(
      cpf: string,
      name: string,
      age: number,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }

   public getCpf(): string {
      return this.cpf
   }

   public getName(): string {
      return this.name
   }

   public getAge(): number {
      return this.age
   }

   public getBalance(): number {
      return this.balance
   }

   public getTransactions(): Transaction[] {
      return this.transactions
   }

   public setTransaction(transaction: Transaction) {
      (this.transactions).push(transaction)
   }
}