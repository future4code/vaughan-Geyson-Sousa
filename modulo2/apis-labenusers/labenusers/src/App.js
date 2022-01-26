import React from "react";
import axios from "axios";
import styled from "styled-components";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuario from "./components/TelaListaUsuario";



class App extends React.Component {
  state ={
    telaInicial: "cadastro"
  }

  mudarTela =() =>{
    switch(this.state.telaInicial){
      case "cadastro":
        return <TelaCadastro irParaListaUsuario={this.irParaListaUsuario}/>
        case "lista":
         return <TelaListaUsuario irParaCadastro ={this.irParaCadastro}/>
         default:
           return <div> Erro! Página não encontrada :( </div>
    }
  }
  irParaCadastro =()=>{
    this.setState({telaInicial:"cadastro"})
  }
  irParaListaUsuario =()=>{
    this.setState({telaInicial:"lista"})
  }

  render(){
  return (
     <div>
       {this.mudarTela()}
     </div>
  )
}
}
export default App;