import { MultiSelectUnstyled } from '@mui/base';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from "react";
import styled from 'styled-components';
import Selects from '../ApplicationFormPage/Selects'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const InputsTrip = styled.div`
display: flex;
flex-direction: column;
`
const ButtonDetail = styled.div`
display: flex;

`

export default function TripDetailsPage() {
    return (
        <div>
            <div>
                <h2>Criar viagem</h2>
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
                    <InputsTrip>
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
                    </InputsTrip>
                    <ButtonDetail>
                    <Stack spacing={50} direction="row" >
                        <Button variant="contained">Voltar</Button>
                        <Button variant="contained">Criar</Button>
                    </Stack>
                </ButtonDetail>
                </Box>
            </div>
        </div>
    ) 
}
