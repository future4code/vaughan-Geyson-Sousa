import express from 'express';
import cors from 'cors';
import {Usuario,Usuarios, Declaração} from './data';
import { userInfo } from 'os';

const app = express();
app.use(express.json());
app.use(cors());

const dataAtual= new Date()
const anoatual= dataAtual.getFullYear()

//todos os usuarios
app.get("/usuarios",(req , res)=>{
    let erroCode: number= 500
    try{
           res.status(200).send(Usuarios)
        
    }catch(err:any){
     res.status(erroCode).send("erro de servidor!")
    }
})
//
app.post("/users",(req, res)=>{
   let erroCode: number =400
   try{
    const {nome,cpf,nascimento,saldo,declaração}=req.body
    const novoUsuario:Usuario={nome,cpf,nascimento,saldo,declaração}
    const novoNascimento:string[]=nascimento.split('/')
    
      if(anoatual-Number(novoNascimento[2])<18){
          erroCode=422
          throw new Error("Você deve ter no minimo 18 anos para realizar o cadastro")
      }
      for (let i = 0; i < Usuarios.length; i++) {
        if (Usuarios[i].cpf === req.body.cpf) {
            erroCode=422
            throw new Error("cpf ja cadastrado")
        }
      if(novoUsuario.saldo !== 0){
          erroCode=422
          throw new Error("O saldo inicial precisa ser 0 ")
      }
    };
    Usuarios.push(novoUsuario)
     res.status(200).send(Usuarios)

   }catch (error: any) {
    if (res.status(erroCode).send({ message: error.message })) {
        res.status(erroCode).send({ message: error.message })
    } else {
        res.status(500).send("A server error has occurred!")
    }
}
})

app.get("/usuario",(req, res)=>{
    let errorC: number = 404

    try{
    const{nome,cpf}=req.query

    if(!nome){
        errorC=404
        throw new Error("O campo query para nome, deve ser preenchido")
    }
    if(!cpf){
        errorC=404
        throw new Error("O campo query para cpf, deve ser preenchido")
    }
    const filtraUsuario = Usuarios.filter((user)=>{
      return cpf===user.cpf && nome===user.nome
      
    }).map((user)=>{
       return res.send(`saldo:${user.saldo}`)
    })
     res.send(filtraUsuario===[]?"":res.status(404).send({message:"Usuario não encontrado"}))
  }catch (error:any){
      res.status(errorC).send({message:error.message})
  

  }
})
//nao está funcionando 
app.put("/usuario/",(req,res)=>{
     const{nome,cpf,saldo}= req.body
     const filtrar = Usuarios.filter((user)=>{
        return nome===user.nome && cpf===user.cpf 
        
      })

})

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
}); 