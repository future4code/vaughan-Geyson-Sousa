import React from "react";
import axios from "axios";
import styled from "styled-components"


const cardUsuario = styled.div`
    border: 1px solid black;
    background-color: lavender;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: flex;
    justify-content: space-between;
`

class Pegar extends React.Component {
    state = {
        playLista: []

    };


    componentDidMount() {
        this.pegarPlaylist()
    }

    adicionarItem = () => {
        const novaLista = [...this.state.playLista, this.state.props.criar]
        this.setState({ playLista: novaLista })
    }


    pegarPlaylist = (() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, { headers: { Authorization: "geyson-sousa-vaughan" } })
            .then((response) => {
                this.setState({ playLista: response.data.result.list });
                
            })
            .catch((error) => {
                alert("Ocorreu um erro, tente novamente!")
                

            })
    })

    render() {
        const lista = this.state.playLista.map((play) => {
            return <cardUsuario key={play.id}>{play.name}</cardUsuario>

        });
        return (
            <div>
                <ul>
                    {lista}
                </ul>

            </div>
        )
    }
}



export default Pegar;
