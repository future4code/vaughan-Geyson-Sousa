import React from "react";
import Box from '@mui/material/Box';

import styled from "styled-components";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import UseRequestData from "../../Hooks/useRequestData";


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
      // const card = (
      //   <React.Fragment>
      //     <Cards>

      //       <Typography variant="body1">
      //         Nome:
      //       </Typography>
      //       <Typography variant="body1">
      //        Descrição:
      //       </Typography>
      //       <Typography variant="body1">
      //        Duração:
      //       </Typography>
      //       <Typography variant="body1">
      //       Data:
      //       </Typography>
      //       <Typography variant="body1">
      //       Planeta:
      //       </Typography>   
      //     </Cards>
      //   </React.Fragment>
      // );
   const reTrips = listTrip.trips && listTrip.trips.map((trip)=>{
    return (
         <div>
           {trip.name}
           {trip.description}
           {trip.planet}
           {trip.durationInDays}
           {trip.date}
         </div>

    )
  })
   console.log(reTrips)
    return(
     <div>
       
        <Texts>
          <h2>Ver viagens</h2>
        </Texts>
        <div>
        {/* <Box sx={{ minWidth:775 }}>
            <Card variant="elevation">{card}</Card>
        </Box> */}
        </div>
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
