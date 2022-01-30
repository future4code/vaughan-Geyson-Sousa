import React from "react";
import TelaPlayList from "./Pages/TelaPlayList";
import TelaDetails from "./Pages/TelaDetails";
import Icone1 from "./Pages/img/Icone1.png";
import styled from "styled-components";

const Logo =styled.img`
height: 120px;
`
const Container = styled.div`
    height: 100vh;
    background: radial-gradient(circle, rgba(70,26,0,1) 0%, rgba(0,0,0,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: white;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
    
`

class App extends React.Component {

  state={
    telaAtual:"list",
    clickVer:""
  } 

  irParaTelaDetails=(id)=>{
    this.setState({telaAtual:"details",clickVer:id})
  }

 voltarParaTelaPlayList=()=>{
    this.setState({telaAtual:"list",clickVer:""})
  }

  escolhaTela =()=>{
    switch(this.state.telaAtual){
      case "list":
        return<TelaPlayList irParaTelaDetails={this.irParaTelaDetails}/>
      case "details":
        return<TelaDetails voltarParaTelaPlayList ={this.voltarParaTelaPlayList} id={this.state.clickVer}/>
      default:
        return <TelaPlayList/>
    }
  }

  mudaTela =(nomeTela)=>{
    this.setState({telaAtual:nomeTela});
    
  }

  render() {
    return (
      <Container>
        <Logo src={Icone1} alt="logo Labefy"/>
        <h1>Labefy</h1>
       {this.escolhaTela()}
       
      </Container>
      
    );
  }
}
export default App;
