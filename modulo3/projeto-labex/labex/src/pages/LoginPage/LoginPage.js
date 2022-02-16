import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
function LoginPage() {
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
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Senha"
                            multiline
                            maxRows={4}
                        />
                    </InputLogin>
                </Box>
            </div>
            <Login>
                <Stack spacing={45} direction="row" >
                    <Button variant="contained"> Login</Button>
                </Stack>
            </Login>
        </div>
    )
}
export default LoginPage;