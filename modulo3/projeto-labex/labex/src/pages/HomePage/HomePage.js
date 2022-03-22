import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const Buttons = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 25rem;

`
const Text = styled.div`
margin: 0;
margin-top: 5rem;
text-align: center;

`
export default function HomePage() {

    const history = useNavigate()

    const goToList = () => {
        history('/trips/list')
    }
    const goToLogin = () => {
        history('/login')
    }
    return (
        <div>
            <Text>
                <h2>Labex</h2>
            </Text>
            <Buttons>
                <Stack spacing={45} direction="row" >
                    <Button variant="contained"
                        onClick={goToList}
                    >Ver viajens</Button>
                    <Button variant="contained"
                        onClick={goToLogin}
                    >Área de Admin</Button>
                </Stack>
            </Buttons>

        </div>


    )
}
