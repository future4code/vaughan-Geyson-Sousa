import React,{useState} from "react";
import axios from "axios";
import {ImagemIcone,LikeCancel,Title} from "../TelaHome/styles"
import Coracao from "../../Assets/coracao.png";
import Cancelar from"../../Assets/cancelar.png";
import { BASE_URL } from "../../constants/Url";

export default function Home () {
const [people, setPeople]= useState([])

const getPeople=()=>{
  axios.get(`${BASE_URL}/person`, {headers:{}}) 
  .then(response => {
    setPeople(response.data.profile)
  })
  .catch(error => {
    alert("Deu certo não ó, tenta novamente aí! ") 
  })
}
people


    return(
      <div>
        <Title>
          <h1>Astromatch</h1>
        </Title>
        <LikeCancel>
          <button><ImagemIcone src={Coracao} alt="Icone Coracao"/></button> 
          <button><ImagemIcone src={Cancelar} alt="Icone Cancelar"/></button>   
        </LikeCancel>
        </div>
    )
}