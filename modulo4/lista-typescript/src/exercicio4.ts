enum SETORES {
    MARK='marketing',
    VEND='vendas',
    FINAN='financeiro',
  }


type Pessoas = {nome: string, salário: number, setor: string, presencial: boolean}

const Colaboradores: Pessoas[] = [
	{ nome: "Marcos", salário: 2500, setor: SETORES.MARK, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETORES.VEND, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETORES.FINAN, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETORES.MARK, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETORES.FINAN, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETORES.VEND, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETORES.MARK, presencial: true }
]

function setor(arr: any[]): any[]{
    return arr.filter((item) =>{
        return item.setor === SETORES.MARK && item.presencial === true
    })
}

console.table(setor(Colaboradores));