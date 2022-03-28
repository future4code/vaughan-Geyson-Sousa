const pessoas: Clientes[]= [
{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

type Clientes = {
  cliente: string,
  saldoTotal: number,
  debitos: number[]
}

const total = (arr: Clientes[]): {} => {
   return arr.map((index: Clientes) => {
       index.saldoTotal = (index.saldoTotal) - (index.debitos.reduce((a: any, p: any) => a + p, 0));
       index.debitos = [];
       return index;
   }).filter((c: Clientes) => {
       return c.saldoTotal < 0;
   })
}

console.table(total(pessoas));