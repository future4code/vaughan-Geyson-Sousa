import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Inputs = styled.div`
display: flex;
flex-direction: column;
`

export default function ApplicationFormPage() {
    const history = useNavigate()
    
    const [name, setName] = useState()
    const [age, setIAge] = useState()
    const [profession, setProfession] = useState()
    const [description, setDescription] = useState()

    const handleName = (ev) => {
        setName(ev.target.value)
    }
    const handleAge = (ev) => {
        setIAge(ev.target.value)
    }
    const handleProfession = (ev) => {
        setProfession(ev.target.value)
    }
    const handleDescription = (ev) => {
        setDescription(ev.target.value)
    }

    const goToBackTrip = () => {
        history('/trips/list')
    }

    const loginTrip = (ev) => {
     ev.preventDefault
    }
    const writeUp = ()=>{
      axios.post (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/geyson/trip/:id/apply`,{headers:{auth:token}})

   .then((response)=>{
       console.log(response.data)
   }).catch((error)=>{
       console.log(error.response)
   })
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
                    <form onSubmit={ loginTrip}>
                        <Inputs>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Nome"
                                multiline
                                onChange={handleName}
                                value={name}
                                maxRows={4}
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Idade"
                                onChange={handleAge}
                                value={age}
                                multiline
                                maxRows={4}
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Profissão"
                                multiline
                                value={profession}
                                onChange={handleProfession}
                                maxRows={4}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Descrição"
                                multiline
                                value={description}
                                onChange={handleDescription}
                                rows={4}
                            />
                        </Inputs>

                        <Stack spacing={45} direction="row" >
                            <Button variant="contained"
                                onClick={goToBackTrip}
                            >Voltar</Button>

                            <Button variant="contained"
                             onClick={writeUp}
                            >Escreve-se</Button>
                        </Stack>
                    </form>
                </Box>
            </div>
        </div>
    )
}

