import './App.css';
import React from "react";
import Primeiro from './components/Primeiro';
import Segundo from './components/Segundo';
import Terceiro from './components/Terceiro';
import Agradecimentos from './components/Agradecimentos';

class App extends React.Component {
  state = {
    etapa: 1,
}

irParaProximaEtapa = () => {
  this.setState({ etapa:this.state.etapa + 1 })
}

render() {
  const renderizaEtapa = () => {

    switch (this.state.etapa) {
      case 1:
        return <Primeiro Segundo={this.irParaProximaEtapa}/>; 
      case 2:
         return <Segundo Terceiro={this.irParaProximaEtapa}/>; 
      case 3:
          return <Terceiro Agradecimentos={this.irParaProximaEtapa}/>; 
      default:
          return <Agradecimentos/>;
      };
    }
    return (
      <div className = "App">
        {renderizaEtapa()}
      </div>
    );
  }
}

export default App;
