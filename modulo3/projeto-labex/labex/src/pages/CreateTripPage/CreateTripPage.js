import React, { useState } from "react"
import { MultiSelectUnstyled } from '@mui/base';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Selects from '../ApplicationFormPage/Selects'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { planet } from "../../Constants/Planets";

const Inputs = styled.div`
display: flex;
flex-direction: column;
`

export default function CreateTripPage() {
    const history = useNavigate()
    const goToBackHome =()=>{
     history('/admin/trips/list')
    }
    const [control, setControl]=useState('')

    const handleSelect =(ev)=>{
      setControl(ev.target.value)
    }


    return (
        
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '60ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <h2> Criar Viagem</h2>
            </div>
            <div>
            <input type="date"></input>
             </div>
            <Inputs>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Nome"
                    multiline
                    maxRows={4}
                />
               <select
               onChange={handleSelect}
               value={control}
               >
                   <option disabled selected>escolha um planeta ...</option>
                   {planet.map((planets)=>{
                       return <option key={planets} value={planets}>{planets}</option>
                   })}
               </select>
                <TextField
                    id="outlined-multiline-static"
                    label="Descrição"
                    multiline
                    rows={4}
                />
            </Inputs>

            <Stack spacing={45} direction="row" >
                <Button variant="contained"
                    onClick={goToBackHome}
                >Voltar</Button>
                <Button variant="contained">Escreve-se</Button>
            </Stack>

        </Box>
        
        
        

    )
}
