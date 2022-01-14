import React from "react"
import "./App.css"


class App extends React.Component {
  state = {
   mensagem: [

  ],

  inputNomeUsuario:"",
  inputMensagemUsuario:""

};

adicionaMensagem = () => {
  const novaMensagem = {
    usuario: this.state.inputNomeUsuario,
    mensagem: this.state.inputMensagemUsuario
};  

const mensagemNova = [...this.state.mensagem,novaMensagem ];  
  this.setState({ mensagem: mensagemNova });
  this.setState({inputNomeUsuario:"", inputMensagemUsuario:""})
};

onChangeinputNomeUsuario = (event) => {
  this.setState({ inputNomeUsuario: event.target.value });
};
onChangeinputMensagemUsuario = (event) => {
  this.setState({ inputMensagemUsuario: event.target.value});
};

  render(){
    const listaMensagem = this.state.mensagem.map((novo) => {
      return (
        <p>
          {novo.usuario}: {novo.mensagem}
        </p>
        );
    });
return (
<div className ="Pai">
  <h1 className =" filho">WhatsaLab</h1>
    <div className = "mensagem">{listaMensagem}</div>
      <input className= "botao"
          value={this.state.inputNomeUsuario}
          onChange={this.onChangeinputNomeUsuario}
          placeholder={"Usuário"}
        />
        <input className="botao1"
          value={this.state.inputMensagemUsuario}
          onChange={this.onChangeinputMensagemUsuario}
          placeholder={"Mensagem"}
        />
        <button className="enviar" onClick={this.adicionaMensagem}>Enviar</button>
        </div>
  );
}
}
 
export default App;