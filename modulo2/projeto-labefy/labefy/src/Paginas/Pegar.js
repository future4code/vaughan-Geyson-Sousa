import React from "react";
import axios from "axios";
// import styled from "styled-components";


// const CardUsuario = styled.div`
//     border: 1px solid black;
//     background-color: lavender;
//     border-radius: 8px;
//     padding: 10px;
//     margin: 10px;
//     width: 200px;
//     display: flex;
//     justify-content: space-between;
// `

class Pegar extends React.Component {
    state = {
        playLista: []

    };


    componentDidMount() {
        this.pegarPlaylist()
    }

    


    pegarPlaylist = (() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, { headers: { Authorization: "geyson-sousa-vaughan" }})
            .then((response) => {
                this.setState({ playLista: response.data.result.list });
                
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente!")
                

            })
    })

    deleteList = ((id)=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`  
        const head=(url,{headers:{Authorization:"geyson-sousa-vaughan"}})
        axios.delete(head,url)
          .then((response) => {
              alert("playList deletada com sucesso!!")
              this.pegarPlaylist()
             })
              .catch((error)=>{
                  alert("Erro ao deletar a PlayList")
              })
    })
        

    render() {
        const lista = this.state.playLista.map((play) => {
            return <div key={play.id}>{play.name}
            <button onClick={()=>this.deleteList(play.id)}>X</button>
            </div>

        });
        return (
            <div>
                <ul>{lista}</ul>
            </div>
        )
    }
}



export default Pegar;
