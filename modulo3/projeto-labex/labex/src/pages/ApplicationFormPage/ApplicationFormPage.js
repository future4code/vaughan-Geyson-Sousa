import { MultiSelectUnstyled } from '@mui/base';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from "react";
import styled from 'styled-components';
import Selects from '../ApplicationFormPage/Selects'

const Inputs = styled.div`
display: flex;
flex-direction: column;
`

function ApplicationFormPage() {
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
                </Box>
            </div>
        </div>
    ) 
}
export default ApplicationFormPage;
