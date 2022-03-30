import express from 'express';
import cors from 'cors';
import { users, post } from './data';


const app = express ();

app.use(express.json());
app.use(cors())

//exercicio 1
app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

//exercicio 2-4
app.get("/person",(req, res)=>{
    res.send(users)
})
//exercicio 5-7 acho melhor criar fora do array de usuarios, pois fica mais legivel
app.get("/post",(req, res)=>{
    res.send(post)
})

//exercicio 8
app.get("/postId/:userId",(req ,res)=>{
    const userId = Number(req.params.userId)
    const allPost = post
    const filterPost= allPost.filter((pos)=>{
      return pos.userId === userId
    })

    res.status(200).send(filterPost)
})

//exercicio 9
app.delete("/posts/:postId", (req, res) => {
    const postId = Number(req.params.postId)
    const postsDel = post.filter((post) => {
        return post.id !== postId
    })
   
    res.status(200).send(postsDel)
})

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003 com sucesso!");
});