import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/Url";
import { ListItem } from '@material-ui/core'
import { ListItemAvatar } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { ImgLogo, Buttons, ImgBack, Header, CardGeral, DivContainer } from "../TelaMatch/style";
import Voltar from "../../Assets/voltar.png"
import Logo from "../../Assets/logo.png"

export default function Match(props) {

  const [match, setMatch] = useState([])
  useEffect(() => {
    getMatches()

  }, [])

  const getMatches = () => {
    axios.get(`${BASE_URL}/matches`, { headers: {} })
      .then(response => {
        setMatch(response.data.matches)

      })
      .catch(error => {
        alert("Deu certo não ó, tenta novamente aí! ")
      })
  }
  const clearMatches = () => {
    axios.put(`${BASE_URL}/clear`, { headers: { "Content-Type": "application/json" } })
      .then((response) => {

        alert(`Seus matches foram deletados com sucesso `)
        getMatches();
      })
      .catch((error) => {
        alert("Deu certo não ó, tenta novamente aí! ")
      })
  }
  const listMatches = match.map((list) => {
    return (
      <div key={list.id}>
        <ListItem >
          <ListItemAvatar>
            <Avatar src={list.photo} alt="Imagem do Match" />
          </ListItemAvatar>
          <ListItemText primary={list.name} />
        </ListItem>
      </div>
    )

  })
  return (
    <DivContainer>
      <CardGeral>
        <Header>
          <Buttons><ImgLogo src={Logo} /></Buttons>
          <Buttons onClick={props.goToHome}><ImgBack src={Voltar} /></Buttons>
        </Header>
        {listMatches}
      </CardGeral>
      <div>
        <button onClick={() => { return clearMatches() }} >Limpar matches </button>
      </div>
    </DivContainer>
  )
}