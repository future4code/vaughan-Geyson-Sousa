import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const CardAdmin =styled(CardContent)`
display: flex;
flex-direction: column;
gap: 1rem;
background-color: #514442;
color:yellow;
`

export default function AdminHomePage() {
    const  history = useNavigate()
    const  goToAdmin =()=>{
      history('/admin/trips/list')
     }
     const goToBackHome=()=>{
        history('/')
      }
const goToCreate =()=>{
    history('/admin/trips/create')
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
            <CardAdmin>

                <Typography variant="body1">
                    Marte:
                </Typography>
            </CardAdmin>
        </React.Fragment>
    );
    return (
        <div>
            <div>
                <h2>Painel Administrativo</h2>
            </div>
            <div>
                <Box sx={{ minWidth: 775 }}>
                    <Card variant="elevation">{card}</Card>
                </Box>
            </div>
            <div>
                <Button>
                    <Stack spacing={5} direction="row" >
                        <Button variant="contained"
                        onClick={goToBackHome}
                        >Voltar</Button>
                        <Button variant="contained"
                        onClick={goToCreate}
                        >Criar Viagem</Button>
                        <Button variant="contained">Logout</Button>
                    </Stack>
                </Button>
            </div>
        </div>
    )
}