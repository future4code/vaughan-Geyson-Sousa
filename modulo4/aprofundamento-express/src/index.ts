import express from 'express'; 
import cors from 'cors';
import { afazeres } from './data';

const app = express();

app.use(express.json());
app.use(cors());

// exercicio 1
app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})
// exercicio 4
app.get("/tasks/:status", (req, res) => {  
    const tasksParam = req.params.status
    const filterTask = afazeres.filter((task)=>{
        return String(task.completed) === tasksParam
    })         
    res.status(200).send(filterTask)
})
//exericio 5
app.post("/createtasks", (req, res) => {
    const newTaskTitle = req.body.title
    const completed = req.body.completed

    const taskNew = {
        userId: Date.now().toString(),
        id: Date.now().toString(),
        title: newTaskTitle,
        completed: completed
    };

    afazeres.push(taskNew)
    res.status(201).send(taskNew)
});
//exercicio 6
app.put("/completed/:userId",(req, res)=>{
    const taskUserId = req.params.userId
     const completed = afazeres.filter((tasks)=>{
         return Number(taskUserId) === tasks.userId
     }).map((tas)=>{
         if(tas.completed === true){
             return {userId:tas.userId, id:tas.id, title:tas.title, completed:false}
         }else{
             return {userId:tas.userId, id:tas.id, title:tas.title, completed:true}
         }
     })
     res.status(200).send(completed)
})
//exercicio 7
app.delete("/deletetask/:id", (req, res) => {
    const tasksParam = req.params.id;

    const deleteTasks = afazeres.filter((tasks) => {
        if (tasks.id !== Number(tasksParam)) {
            return tasks
        }
    });

    res.status(200).send(deleteTasks);
});

// exercicio 8
app.get("/tasksTotal/:userId", (req, res) => {
    const userId = req.params.userId

    const tasksTotal =afazeres.filter((tasks) => {
        return Number(userId) === tasks.userId
    });

    res.status(201).send(tasksTotal);
});

//exercicio 9
// criado em formato Json

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});
