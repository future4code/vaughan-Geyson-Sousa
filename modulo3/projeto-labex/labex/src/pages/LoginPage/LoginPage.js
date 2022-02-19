import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin-top:3rem;

`
const TextLogin = styled.div`
margin: 0;
margin-top: 5rem;
text-align: center
`
const InputLogin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:2rem
`
export default function LoginPage() {
    const history = useNavigate()
    const goToBackHome=()=>{
    history('/')
  }

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const goToAdminHome=()=>{
      history('/admin/trips/list')
  }

const onchangerEmail=(ev)=>{
      setEmail(ev.target.value);
  }
const onchangerPassword=(ev)=>{
   setPassword(ev.target.value)    
}

const submitLogin =()=>{
    const body={
        email:email,
        password:password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/geyson/login', body)
    .then( (response) => {
       console.log('Deu certo:',response.data)
       localStorage.setItem(`token`, response.data.token )
       goToAdminHome()

    }).catch ((error)=>{
        console.log('Deu errado:',error.response)
        alert("Coloque um email  e senha validos ")
    })
}
    return (
        <div>
            <TextLogin>
                <h2>Login </h2>
            </TextLogin>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <InputLogin>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Email"
                            multiline
                            maxRows={4}
                            onChange={onchangerEmail}
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Senha"
                            multiline
                            maxRows={4}
                            onChange={onchangerPassword}
                        />
                    </InputLogin>
                </Box>
            </div>
            <Login>
                <Stack spacing={45} direction="row" >
                    <Button variant="contained"
                    onClick={submitLogin}
                    > Login</Button>
                    <Button variant="contained"
                    onClick={goToBackHome}
                    > Voltar</Button>
                </Stack>
            </Login>
        </div>
    )
}
