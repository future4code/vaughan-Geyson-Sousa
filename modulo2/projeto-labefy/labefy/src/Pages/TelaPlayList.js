import React from "react";
import axios from "axios"
import styled from "styled-components";

const List  = styled.div`
    border: 1px solid black;
     background-color: black; 
    border-radius: 5px;
    padding: 10px;
     margin: 10px;
     width: 500px;
     display: flex;
    justify-content: space-between;
    color: floralwhite;
    box-shadow: 10px 0px 60px ;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: orange;
        color: black;
    }

`
class TelaPlayList extends React.Component {
  state = {
    inputTexto: "",
    lista: []

  };

  inputControl = (ev) => {
    this.setState({ inputTexto: ev.target.value });
  }

  componentDidMount() {
    this.pegarPlaylist()
    
  }

  criarPlayList = () => {
    const axiosConfig = {
      headers: {
        Authorization: "geyson-sousa-vaughan"
      }
    };

    const body = {
      name: this.state.inputTexto,

    };

    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body,
      axiosConfig
    )
      .then(() => {
        alert(`PlayList ${this.state.inputTexto} criado com sucesso!`);
        this.setState({ inputTexto: "", });
        this.pegarPlaylist()
      })
      .catch(error => {
        alert("Erro ao criar PlayList");

      });
  };
  
  pegarPlaylist = (() => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.get(url, { headers: { Authorization: "geyson-sousa-vaughan" } })
      .then((response) => {
        this.setState({ lista: response.data.result.list });
      })
      .catch((error) => {
        alert("Ocorreu um erro, tente novamente!")
      })
  })

  deleteList = ((id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

    axios.delete(url, { headers: { Authorization: "geyson-sousa-vaughan" } })
      .then((response) => {
        alert("playList deletada com sucesso!!")
        this.pegarPlaylist()
      })
      .catch((error) => {
        alert("Erro ao deletar a PlayList")
      })
  })

  render() {
    const listaPlayList = this.state.lista.map((play) => {
      return <List key={play.id}>
      <div >
      <button onClick={()=>{this.props.irParaTelaDetails(play.id)}}>Ver Detalhes</button>
      </div>
      {play.name}
      <button onClick={()=>this.deleteList(play.id)}>X</button>
      </List>

  });

    return (
      <div>
        <h1>Labefy</h1>
        <label>Criar Playlist</label>
        <input
          value={this.state.inputTexto}
          onChange={this.inputControl}>
        </input>
        <button onClick={this.criarPlayList}>Criar</button>
        {listaPlayList}
      </div>
    )
  }
}

export default TelaPlayList;