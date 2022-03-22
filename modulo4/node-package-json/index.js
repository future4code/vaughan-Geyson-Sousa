var lista = ["lavar carro", "banhar"];
const tarefa = process.argv [2];
const adicionar =()=>{
    var novaList =[...lista, tarefa]
    console.log("tarefa adicionada com sucesso!")
    console.log("tarefas:", novaList)
}
    adicionar()