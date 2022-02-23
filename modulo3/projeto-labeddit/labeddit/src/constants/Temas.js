import { createTheme } from '@mui/material'
import { corPrimaria, corSecundaria, corNeutra } from './Cores';

 export const Temas = createTheme({
    palette: {
        primary: {
            main: corPrimaria,
            contrastText: corNeutra
        },
        secondary: {
            main: corSecundaria,
            contrastText: corNeutra
        }
    }
})
