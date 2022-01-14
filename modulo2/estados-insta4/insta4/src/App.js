import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Poste from './img/Eu.jpg';
import Avatar from './img/Avatar.png';
import Lego from './img/Lego.jpg';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    postes: [
      {
        nomeUsuario: "Geyson",
        fotoUsuario: Poste,
        fotoPost: Poste,
      },
      {
        nomeUsuario: "Avatar",
        fotoUsuario: Avatar,
        fotoPost: Avatar,
      },
      {
        nomeUsuario: "Sr Lego",
        fotoUsuario: Lego,
        fotoPost: Lego
      }
    ],

    inputUsuario: "",
    inputFoto: "",
    inputPost: ""
  };

  adicionarPost = () => {
    const postNovo = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost

    };
    const posteNovo = [...this.state.postes, postNovo];
    this.setState({ postes: posteNovo });
  }
  onChangeInputNomeUsuario = (event) => {

    this.setState({ inputNomeUsuario: event.target.value });
  };

  onChangeInputFoto = (event) => {

    this.setState({ inputFotoUsuario: event.target.value });

  };
  onChangeInputFotoPost = (event) => {

    this.setState({ inputFotoPost: event.target.value });

  };

  render() {
    const listaDePosts = this.state.postes.map((post) => {

      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    })

    return (
      <MainContainer>
        
        <div>
          <input
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome"}
          />
          <input
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFoto}
            placeholder={"link"}
          />
          <input
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"post"}
          />
          <button onClick={this.adicionarPost}>Adicionar</button>
        </div>
        {listaDePosts}
      </MainContainer>
    )
      
  }   
}   

export default App;
