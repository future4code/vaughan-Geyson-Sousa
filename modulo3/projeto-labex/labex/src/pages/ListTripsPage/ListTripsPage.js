import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


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
function ListTripPage (){
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
                    <Button variant="contained">Escrever-se</Button>
                </Stack>
            </Button>
        </div>
     </div>
   )
}
export default ListTripPage;