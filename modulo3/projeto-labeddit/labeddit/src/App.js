import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Temas } from './constants/Temas';
import Routes from './routes/Router';
import StyleGlobal from './Style';

function App() {
  return (

    <ThemeProvider theme={Temas}>
      
      <Routes />    
    </ThemeProvider>

  );
}

export default App;
