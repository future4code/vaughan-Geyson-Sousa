import express from 'express';
import cors from 'cors';
import {User,Type, users} from './data';


const app = express();
app.use(express.json());
app.use(cors());

//exercicio1
app.get("/users",(req,res)=>{
    let codeError: number = 400
    try{
        if (!users) {
            codeError = 404
            throw new Error("Não encontrado")
         }
         res.status(201).send(users)
    }catch(erro:any){
        if(res.status(codeError).send({ message: erro.message })){
            res.status(codeError).send({ message: erro.message })
         }else{
            res.status(500).send("Erro de servidor")
         }
    }

});//a) usando o http "get"
   //b) "/users" entidade usada.

//exercicio 2
app.get("/user/:types",(req, res)=>{
    let codeError: number = 400
    try {
       const type: string = req.params.types;
 
       if (type !== Type.ADMIN.toLowerCase() && type !== Type.NORMAL.toLowerCase()) {
          throw new Error("parametro não esperado")
       }
       const filter = users.filter(user => {
          return user.type.toLowerCase().includes(type.toLowerCase())
       })
 
       res.status(200).send(filter)
    } catch (e: any) {
       if(res.status(codeError).send({ message: e.message })){
          res.status(codeError).send({ message: e.message })
       }else{
          res.status(500).send("Erro de servidor!")
       }
    }
 }) // a) foi passado como path parameters
    // b) comparação do type passado com o do array
 
 // exercicio 3
 // exercicio 4
 app.post("/users", (req, res) => {
    let errorCode = 400
 
    try {
       const userNew: User = {
          id: 9,
          name: "Geyzon",
          email: 'Gey@g.com',
          type: Type.NORMAL,
          age: 15
       }
 
       users.push(userNew)
       res.status(200).send("Usuário criado com sucesso");
 
    } catch (error: any) {
       res.status(errorCode).send({message: error.message})
    }
 })//a ) foi alterado com o mesmo resultado
  // b ) sim. pois o put serve para fazer alterações que ja existem

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});