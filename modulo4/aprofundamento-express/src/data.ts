//exercicio 2
type Afazeres ={
 id:number|string,
 userId:number|string,
 title:string,
 completed:boolean;
}

//exercicio 3
export const afazeres: Afazeres[]=[
    {
        id:1,
        userId: 1,
        title: "lavar",
        completed: true

    },
    {
        id:5,
        userId: 1,
        title: "correr",
        completed: true

    },
    {
        id:2,
        userId: 2,
        title: "varrer",
        completed: false

    },
    {
        id:3,
        userId: 2,
        title: "andar",
        completed: false

    },
];



