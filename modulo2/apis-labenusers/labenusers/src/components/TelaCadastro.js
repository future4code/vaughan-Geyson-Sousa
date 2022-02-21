import axios from "axios";
import React from "react";
import styled from "styled-components";

const Container =styled.div`
box-shadow: inset 0 0 1em black, 0 0 1em black;
justify-content: flex-start;

`

class TelaCadastro extends React.Component{
    state={
        nome:"",
        email:"",
    }

   nomeFuncao=(e)=>{
    this.setState({nome: e.target.value})
   } 

   emailFuncao=(e)=>{
    this.setState({email: e.target.value})
   } 

   criarCadastro = ()=>{
     const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
     const body = {
         name:this.state.nome,
         email:this.state.email,
    }
     axios.post(url,body, {
       headers:{
        Authorization:"geyson-sousa-vaughan"
       }
      })
      .then((res)=> {
         alert("Usuário(a) cadastrado(a)!")
         this.setState({nome:"",email:""})
      })
      .catch((err)=> {
         alert(`Erro ao cadastrar! ${err.response.data.message}`)
      })
   }
    render(){
       return (
           <Container>
               <button onClick={this.props.irParaListaUsuario}>Ir para proxima tela</button>
               <h2>Cadastro</h2>
               <input
                  placeholder={"Nome"}
                  value={this.state.nome}
                  onChange={this.nomeFuncao}
               /> 
               <input
                  placeholder={"E-mail"}
                  value={this.state.email}
                  onChange={this.emailFuncao}
               /> 
               <button onClick={this.criarCadastro}>Cadastrar</button>
           </Container>
       )
    }
}
export default TelaCadastro