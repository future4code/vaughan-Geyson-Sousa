import { ThemeProvider } from '@mui/material';
import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Temas } from './constants/Temas';
import Router from './routes/Router';
import Headers from './components/Header/Headers';

function App() {
  const token = localStorage.getItem("token")
  const [textoCerto, setTextoCerto] = useState (token ? "logout" : "login")

  return (

    <ThemeProvider theme={Temas}>
      <BrowserRouter>
      <Headers textoCerto={textoCerto} setTextoCerto={setTextoCerto}/> 
      <Router setTextoCerto={setTextoCerto} />    
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
