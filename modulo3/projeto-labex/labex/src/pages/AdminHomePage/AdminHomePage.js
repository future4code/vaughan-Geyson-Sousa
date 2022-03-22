import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import styled from "styled-components";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UseRequestData from "../../Hooks/useRequestData";

const CardAdmin = styled.div`
 border-style:solid;
 border-color: blue;
 margin-bottom:4rem;
`

export default function AdminHomePage() {
    const[listTrip]=UseRequestData(`/trips`,{})
    const history = useNavigate()
    const goToAdmin = () => {
        history('/admin/trips/list')
    }
    const goToBackHome = () => {
        history('/')
    }
    const goToCreate = () => {
        history('/admin/trips/create')
    }
    const clickTrips =(id)=> {
        history(`/admin/trips/${id}`)
    }
    
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        </Box>
    );
  
    const tripAdmin = listTrip.trips && listTrip.trips.map((trip)=>{
        return(
            <div onClick={()=>clickTrips(trip.id)}>
                {trip.name}
            </div>
        )
    })
    return (
        <div>
            <div>
                <h2>Painel Administrativo</h2>
            </div>

            <CardAdmin >
            {tripAdmin}
            </CardAdmin>
           
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