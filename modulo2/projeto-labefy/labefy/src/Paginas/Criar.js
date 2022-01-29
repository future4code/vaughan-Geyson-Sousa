import React from "react";
import axios from "axios"


class Criar extends React.Component{
state ={
    inputTexto: "",
    
};

inputControl = (ev)=>{
    this.setState({inputTexto:ev.target.value});
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
        this.setState({ inputTexto: "",});
      })
      .catch(error => {
        alert("Erro ao criar PlayList");
        
      });
  };


render(){
 


    return(
        <div>
          <h1>Labefy</h1>
          <input 
          value ={this.state.inputTexto} 
          onChange={this.inputControl}>
          </input> 
          <p>criar Playlist</p>
          <button onClick={this.criarPlayList}>Criar</button>
          
        
        </div>
    )  
 }
}



export default Criar;