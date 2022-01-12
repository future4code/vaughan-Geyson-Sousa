import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Poste from './img/Eu.jpg';
import Avatar from './img/Avatar.png';
import Lego from './img/Lego.jpg';
// import Logo from './img/logo.svg'


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Geyson'}
          fotoUsuario={Poste}
          fotoPost={Poste}
        />
        <Post
          nomeUsuario={'Avatar'}
          fotoUsuario={Avatar}
          fotoPost={Avatar}
        />
        <Post
          nomeUsuario={'Sr Lego'}
          fotoUsuario={Lego}
          fotoPost={Lego}
        
        />
      </MainContainer>
    );
  }
}

export default App;
