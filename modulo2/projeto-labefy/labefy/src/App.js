import React from "react";
import TelaPlayList from "./Pages/TelaPlayList";
import TelaDetails from "./Pages/TelaDetails"

class App extends React.Component {

  state={
    telaAtual:"list",
    clickVer:""
  } 

  irParaTelaDetails=(id)=>{
    this.setState({telaAtual:"details",clickVer:id})
  }

  escolhaTela =()=>{
    switch(this.state.telaAtual){
      case "list":
        return<TelaPlayList irParaTelaDetails={this.irParaTelaDetails}/>
      case "details":
        return<TelaDetails id={this.state.clickVer}/>
      default:
        return <TelaPlayList/>
    }
  }

  mudaTela =(nomeTela)=>{
    this.setState({telaAtual:nomeTela});
    
  }

  render() {
    return (
      <div>
       {this.escolhaTela()}
      </div>
    );
  }
}
export default App;
