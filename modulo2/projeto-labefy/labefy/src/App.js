import React from "react";
import Criar from "./Pages/Criar";
import Pegar from "./Pages/Pegar";
import Outro from "./Pages/Outro"




class App extends React.Component {

  state={
    atual:"List",
    info:""
  }


  detailPlay=(url)=>{
    this.setState({atual:"Details,info:url"})


  }
  escolhaPagina =()=>{
    switch(this.state.atual){
      case "list":
        return<Criar detailPlay={this.detailPlay}/>
      case "Details":
        return<Pegar url={this.state.info}/>
      default:
        return <Outro/>
    }
  }
  render() {
    return (
      <div>
        <Criar/>
        <Pegar/>
      </div>
    );
  }
}
export default App;
