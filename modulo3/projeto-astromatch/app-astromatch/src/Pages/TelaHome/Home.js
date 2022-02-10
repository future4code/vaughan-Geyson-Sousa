import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImagemIcone, Buttons, ImgLogo, ImgMatch, CardGeral, Header, ButtonStyle, DivContainer } from "../TelaHome/styles"
import Like from "../../Assets/like.png"
import Cancelar from "../../Assets/cancelar.png"
import Logo from "../../Assets/logo.png"
import Match from "../../Assets/match.png"
import Voltar from "../../Assets/voltar.png"
import { BASE_URL } from "../../constants/Url";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';

export default function Home(props) {
  const [people, setPeople] = useState([])

  useEffect(() => {
    getPeople()

  }, [])


  const getPeople = () => {
    axios.get(`${BASE_URL}/person`, { headers: {} })
      .then(response => {
        setPeople(response.data.profile)

      })
      .catch(error => {
        alert("Deu certo não ó, tenta novamente aí! ")
      })
  }

  const choosePeople = () => {
    const body = {
      id: people.id,
      choice: true
    }
    axios.post(`${BASE_URL}/choose-person`, body, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (response.data.isMatch) {
          alert(`Você clicou no match com ${people.name}`)
          getPeople();
        }

      })
      .catch((error) => {
        alert("Deu certo não ó, tenta novamente aí! ")

      })
  }

  return (
    <DivContainer>
      <CardGeral>
        <Header>
          <Buttons onClick={props.goToHome}><ImgLogo src={Logo} /></Buttons>
          <Buttons onClick={props.goToMatch}><ImgMatch src={Match} /></Buttons>
        </Header>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={people.photo}
            alt="Foto de Perfil"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {people.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {people.bio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <ButtonStyle>
          <Buttons onClick={() => { choosePeople() }}><ImagemIcone src={Like} alt="Icone Coracao" /></Buttons>
          <Buttons onClick={() => { getPeople() }}><ImagemIcone src={Cancelar} alt="Icone Cancelar" /></Buttons>
        </ButtonStyle>
      </CardGeral>
    </DivContainer>
  )
}