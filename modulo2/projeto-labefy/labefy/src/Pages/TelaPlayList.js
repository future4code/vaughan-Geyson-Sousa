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
    box-shadow: 10px 0px 10px black ;
    align-items: center;

    &:hover {
        background-color:  #c94d00;
        color: black;
    }
`
const Pai = styled.div`
 display: flex;
 flex-direction:column;
 align-items: center;
 margin:30px;
 color:white
`
const Botao = styled.div`
  color: white;
  border-radius: 10px;
  border: solid 1px white;
  height: 10px;
  width: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
        cursor: pointer;
        border-color: black;
        background-color: black;
        color: white;
    }
`
const Delete = styled.div`
  color: white;
  border-radius: 10px;
  border: solid 1px white;
  height: 7px;
  width: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
        cursor: pointer;
        border-color: black;
        background-color: black;
        color: white;
       }

`
const Adiciona = styled.div`
  padding: 50px;
 display: flex;
 align-items: center;
 gap: 10px;

`
const Input = styled.input`
    color: white;
    border-radius: 10px;
    background-color: transparent;
    border-color: transparent;
    height: 30px;
    border: 1px solid white;
    width: 300px;
&:hover {
    color: white;
}
&:focus {
    outline: none;
}
`

class TelaPlayList extends React.Component {
  state = {
    inputTexto: "",
    lista: [],

  };

  inputControl = (ev) => {
    this.setState({ inputTexto: ev.target.value });
  }

  componentDidMount() {
    this.pegarPlaylist()
    
  }

  criarPlayList = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.inputTexto,
    }

    axios.post(url, body, {headers: { Authorization: "geyson-sousa-vaughan" }})

      .then((response) => {
        alert(`PlayList ${this.state.inputTexto} criado com sucesso!`);
        this.setState({ inputTexto: "", });
        this.pegarPlaylist()
      })
      .catch(error => {
        alert("Erro ao criar PlayList");
      })
  }
  
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
      <Botao onClick={()=>{this.props.irParaTelaDetails(play.id)}}>Ver</Botao>
      </div>
      {play.name}
      <Delete onClick={()=>this.deleteList(play.id)}>X</Delete>
      </List>

  });

    return (
      <Pai>
      
        <h2>PlayLists</h2>
        <Adiciona>
        <Input
          placeholder="Nome da Playlist"
          value={this.state.inputTexto}
          onChange={this.inputControl}>
        </Input>
        <Botao onClick={this.criarPlayList}>Criar</Botao>
        </Adiciona>
        {listaPlayList}
      </Pai>
    )
  }
}

export default TelaPlayList;