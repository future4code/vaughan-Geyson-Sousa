import React from "react";
import Box from '@mui/material/Box';
import styled from "styled-components";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import UseRequestData from "../../Hooks/useRequestData";

const Cards = styled.div`
 border-style:solid;
 border-color: blue;
 margin-bottom:4rem;
`
const Texts =styled.div`
text-align: center;
font-family:Times New Roman;

`
export default function ListTripPage (){
  const [listTrip] = UseRequestData(`/trips`,{})
  const  history = useNavigate()

  const goToBackHome=()=>{
    history('/')
  }
  

  const  goToForm =()=>{
    history('/trips/application')
   }

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        </Box>
      );
   const reTrips = listTrip.trips && listTrip.trips.map((trip)=>{
    return (
         <Cards>
           <h2> Nome da viagem: </h2><h2>{trip.name}</h2>
           <p> Descrição : {trip.description}</p>
           <p> Planeta : {trip.planet}</p>
           <p> Duração : {trip.durationInDays}</p>
           <p> Data : {trip.date}</p>
         </Cards>

    )
  })
   console.log(reTrips)
    return(
     <div>
       
        <Texts>
          <h2>Ver viagens</h2>
        </Texts>
    
        {reTrips}
        <div>
            <Button>
                <Stack spacing={45} direction="row" >
                    <Button variant="contained"
                    onClick={goToForm}
                    >Escrever-se</Button>
                    <Button variant="contained"
                    onClick={goToBackHome}
                    >Voltar</Button>
                </Stack>
            </Button>
        </div>
     </div>
   )
}
