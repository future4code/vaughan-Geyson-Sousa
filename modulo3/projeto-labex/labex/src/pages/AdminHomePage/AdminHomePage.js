import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function AdminHomePage() {

const CardAdmin =styled(CardContent)`
display: flex;
flex-direction: column;
gap: 1rem;
background-color: #514442;
color:yellow;
`

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        </Box>
    );
    const card = (
        <React.Fragment>
            <CardAdmin>

                <Typography variant="body1">
                    Marte:
                </Typography>
            </CardAdmin>
        </React.Fragment>
    );
    return (
        <div>
            <div>
                <h2>Painel Administrativo</h2>
            </div>
            <div>
                <Box sx={{ minWidth: 775 }}>
                    <Card variant="elevation">{card}</Card>
                </Box>
            </div>
            <div>
                <Button>
                    <Stack spacing={5} direction="row" >
                        <Button variant="contained">Voltar</Button>
                        <Button variant="contained">Criar Viagem</Button>
                        <Button variant="contained">Logout</Button>
                    </Stack>
                </Button>
            </div>
        </div>
    )
}