export type Declaração = {
    pagamento: number,
    data: string,
    descrição: string
};

export type Usuario = {
    nome: string,
    cpf: string,
    nascimento: string,
    saldo: number,
    declaração: Declaração[],
};

export const Usuarios:Usuario[] = [{
    nome: "geyson",
    cpf: "742.123.777-32",
    nascimento: "04/06/2000",
    saldo: 100,
    declaração: []
    },
    {
    nome: "osgur",
    cpf: "877.144.252-45",
    nascimento: "19/10/1980",
    saldo: 45,
    declaração: [{
        pagamento: 1,
        data: "",
        descrição: ""
    },
    {
        pagamento: 2,
        data: "",
        descrição: ""
    }]
    }, 
];