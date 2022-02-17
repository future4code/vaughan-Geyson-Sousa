import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Cards =styled(CardContent)`
display: flex;
flex-direction: column;
gap: 1rem;
background-color: #514442;
color:yellow;
`
const Texts =styled.div`
text-align: center;
font-family:Times New Roman;

`
export default function ListTripPage (){
  
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
      const card = (
        <React.Fragment>
          <Cards>

            <Typography variant="body1">
              Nome:
            </Typography>
            <Typography variant="body1">
             Descrição:
            </Typography>
            <Typography variant="body1">
             Duração:
            </Typography>
            <Typography variant="body1">
            Data:
            </Typography>
            <Typography variant="body1">
            Planeta:
            </Typography>   
          </Cards>
        </React.Fragment>
      );
   
    return(
     <div>
        <Texts>
          <h2>Ver viagens</h2>
        </Texts>
        <div>
        <Box sx={{ minWidth:775 }}>
            <Card variant="elevation">{card}</Card>
        </Box>
        </div>
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
