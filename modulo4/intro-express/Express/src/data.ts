type TypePerson ={
   id:number,
   name:string,
   phone:number,
   email:string,
   website:string;

}
type TypePost ={
   title:string,
   id :number,
   body:string,
   userId:number,
   
}
export const users : TypePerson[]=[
  {
     id: 1,
     name: 'geyson-mesquita',
     phone: 88555652,
     email: 'ge@gmail.com',
     website: 'g.gmail',
  },
  {
   id: 2,
   name: 'mesquita',
   phone: 21101010,
   email: 'me@gmail.com',
   website: 'm.gmail',
}
];
// exercicio 2-6
export const post : TypePost[]=[
   {
      userId:2,
      title: "oie como vai?",
      body:"me chamo fulano",
      id: 2
   },
   {
      userId:1,
      title: " hello word",
      body:"iae mundo como vai ?",
      id: 1
   }
]
