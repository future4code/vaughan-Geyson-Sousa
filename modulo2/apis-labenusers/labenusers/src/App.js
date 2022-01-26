import React from "react";
import axios from "axios";
import styled from "styled-components";




class App extends React.Component {
  state = {
    users: [],
    inputNome: "",
    inputEmail: "",
  }
  componentDidMount = () => {
    this.getAllUsers();
  };
  onChangeNome = (e) => {
    this.setState({ inputNome: e.target.value });
  };
  onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };
  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const axioConfig = { headers: { Authorization: "geyson-sousa-vaughan" } }
    axios
      .get(url, axioConfig)
      .then((response) => {
        this.setState({ users: response.data.result.list });
        console.log(response.data.result.list);
      })
      .catch((error) => {
        console.log(error.response);
      })
  };
  createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };
    const axioConfig = { headers: { Authorization: "geyson-sousa-vaughan" } }
    axios
      .post(url, body, axioConfig)
      .then(() => {
        alert("Usuário criado com sucesso!");
        this.setState({ inputNome: "" });
        this.setState({ inputEmail: "" });
        this.getAllUsers();
      })
      .catch((error) => {
        console.log(error.response);
        alert("Erro ao criar o usuário!")
      })
  };
  render() {
    const listUsers = this.state.users.map((lista) => {
      return (
        <div>
          <li>{lista.nome}</li>
        </div>
      )
    });
    console.log(this.state)
    return (
      <div>
        <input
          placeholder="Nome"
          value={this.state.inputNome}
          onChange={this.onChangeNome}
        />
        <input
          placeholder="E-mail"
          value={this.state.inputEmail}
          onChange={this.onChangeEmail}
        />
        <button onClick={this.createUser}>Criar Usuário</button>
        {listUsers}
      </div>
    )
  }
}
export default App;