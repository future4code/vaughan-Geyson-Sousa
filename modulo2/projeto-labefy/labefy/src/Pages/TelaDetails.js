import React from "react";
import axios from "axios";
import styled from "styled-components";

const List  = styled.div`
    border: 1px solid black;
     background-color: black; 
    border-radius: 5px;
    padding: 10px;
     margin: 10px;
     width: 900px;
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

const Botao1 = styled.div`
  color: white;
  border-radius: 10px;
  border: solid 1px white;
  height: 20px;
  width: 150px;
  margin: 30px;
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

const Input = styled.input`
      color:white;
      border-radius: 10px;
    background-color: transparent;
    border-color: transparent;
    height: 30px;
    border: 1px solid white;
    width: 270px;
&:hover {
    color: white;
}
&:focus {
    outline: none;
}
`

class TelaDetails extends React.Component {

  state = {
    musicas: [],
    nomeInput: "",
    artistaInput: "",
    urlInput: ""
  }

  adicionarNome = (ev) => {
    this.setState({ nomeInput: ev.target.value })
  }
  adicionarArtista = (ev) => {
    this.setState({ artistaInput: ev.target.value })
  }
  adicionarUrl = (ev) => {
    this.setState({ urlInput: ev.target.value })
  }

  componentDidMount() {
    this.pegarMusica()
  }

  adicionarMusica = (() => {
    const urlPlay = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`
    const body = {
      name: this.state.nomeInput,
      artist: this.state.artistaInput,
      url: this.state.urlInput,
    }

    axios.post(urlPlay, body,{headers: { Authorization: "geyson-sousa-vaughan" }})

      .then((response) => {
        alert("Música Adicionada com Sucesso !");
        this.setState({ nomeInput: "", artistaInput: "", urlInput: "" });
        this.pegarMusica();
      })
      .catch((error) => {
        alert("Erro ao adicionar música!")
      })
  })

  pegarMusica = (() => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`
    axios.get(url, { headers: { Authorization: "geyson-sousa-vaughan" } })

      .then((response) => {
        this.setState({ musicas: response.data.result.tracks });
      })
      .catch((error) => {
        alert("Ocorreu um erro, tente novamente!")
      })
  })

  deleteMusic = ((id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${id}`

    axios.delete(url, { headers: { Authorization: "geyson-sousa-vaughan" } })

      .then((response) => {
        alert("Música deletada com sucesso!!")
        this.pegarMusica()
      })
      .catch((error) => {
        alert("Erro ao deletar a Música")
      })
  })

  render() {
    const listaDeMusicas = this.state.musicas.map((info) => {
      return (
        <List key={info.id} >
          <p>Artista:{info.artist}</p>
          <p>Música:{info.name}</p>
          <a href={info.url} />
          <audio controls>
            <source src= {info.url}/>
          </audio>
          <Delete onClick={() => this.deleteMusic(info.id)}>X</Delete>
        </List>
      )
    })
    return (
      <Pai>

        <h3>Adicionar Musicas</h3>

        <Adiciona>
        <Input
          placeholder="Nome da música"
          value={this.state.nomeInput}
          onChange={this.adicionarNome}>
        </Input>
        <Input
          placeholder="Artista/Banda"
          value={this.state.artistaInput}
          onChange={this.adicionarArtista}>
        </Input>
        <Input
          placeholder="Link da Música"
          value={this.state.urlInput}
          onChange={this.adicionarUrl}>
        </Input>

        <Botao onClick={this.adicionarMusica}>Adicionar</Botao>
        </Adiciona>

        {listaDeMusicas}
        <Botao1 onClick={()=>this.props.voltarParaTelaPlayList("list")}>Voltar Para PlayList</Botao1>
      </Pai>
    );
  }
}
export default TelaDetails;