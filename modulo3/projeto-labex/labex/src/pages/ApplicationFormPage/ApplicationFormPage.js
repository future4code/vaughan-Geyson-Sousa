import { MultiSelectUnstyled } from '@mui/base';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from "react";
import styled from 'styled-components';
import Selects from '../ApplicationFormPage/Selects'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Inputs = styled.div`
display: flex;
flex-direction: column;
`

export default function ApplicationFormPage() {

    const  history = useNavigate()

  const goToBackTrip=()=>{
    history('/trips/list')
  }

    
    return (
        <div>
            <div>
                <h2>Escreva-se para uma viagem</h2>
            </div>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '60ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >  
                    <Selects/>
                    <Inputs>
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Nome"
                          multiline
                          maxRows={4}
                        />
                         <TextField
                           id="outlined-multiline-flexible"
                           label="Idade"
                           multiline
                           maxRows={4}
                        />
                         <TextField
                           id="outlined-multiline-flexible"
                           label="Profissão"
                           multiline
                           maxRows={4}           
                         />
                            <TextField
                            id="outlined-multiline-static"
                            label="Descrição"
                            multiline
                            rows={4}         
                         />
                    </Inputs>
                    
                <Stack spacing={45} direction="row" >
                    <Button variant="contained"
                    onClick={goToBackTrip}
                    >Voltar</Button>
                    <Button variant="contained">Escreve-se</Button>
                </Stack>
            
                </Box>
            </div>
        </div>
    ) 
}
 
