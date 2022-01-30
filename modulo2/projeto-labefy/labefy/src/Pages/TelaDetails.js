import React from "react";
import axios from "axios";
// import styled from "styled-components";

class TelaDetails extends React.Component {

    state={
        musicas:[],
        nomeInput:"",
        artistaInput:"",
        urlInput:""
    }

    adicionarNome=(ev)=>{
        this.setState({nomeInput: ev.target.value})
    }
    adicionarArtista=(ev)=>{
        this.setState({artistaInput: ev.target.value})
    }
    adicionarUrl=(ev)=>{
        this.setState({urlInput: ev.target.value})
    }

    adicionarMusica =(() =>{
        const urlPlay= `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`
        const headers={Authorization : "geyson-sousa-vaughan"}
        const body={
            name: this.state.nomeInput,
            artist: this.state.artistaInput,
            url: this.state.urlInput,
        }
        axios.post(urlPlay,body,headers)
        .then((resp)=>{
            alert("Música Adicionada com Sucesso !")
            this.setState({adicionarNome:"",adicionarArtista:"",adicionarUrl:""})
            this.pegarMusica()  
        })
        .catch((error)=>{
          alert("error")
          
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
        const listaDeMusicas= this.state.musicas.map((info)=>{
          return <div key={info.id} >
              <p>Artista:{info.artist}</p>
              <p>Música:{info.name}</p>
              <a href={info.url}/>
              <button onClick={()=>this.deleteMusic(info.id)}>X</button>
          </div>
        })
        return(
          <div>
          
          <h3>Adicionar Musicas</h3>
          <input 
          placeholder="Nome da musica"
          value={this.state.nomeInput}
          onChange={this.adicionarNome}>
          </input>
          <input 
          placeholder="Artista/Banda"
          value={this.state.artistaInput}
          onChange={this.adicionarArtista}>
          </input>
          <input 
          placeholder="Link da Musica"
          value={this.state.urlInput}
          onChange={this.adicionarUrl}>
          </input>
          
          <button onClick={this.adicionarMusica}>Adicionar</button>
          {listaDeMusicas}
          </div>
       );
    }
}
export default TelaDetails;