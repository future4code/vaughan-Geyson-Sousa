import React from "react";
import axios from "axios";
// import styled from "styled-components";

class Outro extends React.Component {

    state={
        PlayList:[]
    }

    verDetalhes =((id) =>{
        const urlPlay= `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const headers={Authorization : "geyson-sousa-vaughan"}
        axios.get(urlPlay,headers)
        .then((resp)=>{
           console.log(resp)
          
        })
        .catch((error)=>{
          alert("error")
          console.log(error)
        })

    })
    render() {
        return(
          <div>
          {this.verDetalhes()}
          <input></input>
          </div>
       );
    }
}
export default Outro;