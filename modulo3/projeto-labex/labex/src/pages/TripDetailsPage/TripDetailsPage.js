
import React, { useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import UseRequestData from '../../Hooks/useRequestData';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export default function TripDetailsPage() {
    const params = useParams()
    const [listTrip] = UseRequestData(`/trip/${params.id}`)
    const  history = useNavigate()
    const goToBackPage=()=>{
        history('/admin/trips/list')
      }


    return (
        <div>
            <h2>Pagina de Detalhes</h2>
            {listTrip && listTrip.trip && <h2>{listTrip.trip.name}</h2>}
            {listTrip && listTrip.trip && <h2>{listTrip.trip.description}</h2>}
            {listTrip && listTrip.trip && <h2>{listTrip.trip.planet}</h2>}
            {listTrip && listTrip.trip && <h2>{listTrip.trip.durationInDate}</h2>}
            {listTrip && listTrip.trip && <h2>{listTrip.trip.date}</h2>}

            <h2> candidatos Aprovados</h2>
             <button onClick={goToBackPage}>Voltar</button>
             
        </div>
    )
}