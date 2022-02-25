import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Logo from '../../assets/Logo.png'
import { Img, StyledToobar } from './style'
import { useNavigate } from "react-router-dom"
import { irParaFeed, irParaLogin } from '../../routes/Cordenadas';
import { useState } from 'react';


function Headers() {
  const token = localStorage.getItem("token")
  const [textoCerto, setTextoCerto] = useState (token ? "logout" : "login")
  const navigate = useNavigate()

  return (
      
      <AppBar position="static">
        <StyledToobar>
          <Button onClick={() => irParaFeed(navigate)}> <Img src={Logo} alt="Logomarca" /></Button>
          <Button color="inherit" onClick={() => irParaLogin(navigate)}
          >{textoCerto}</Button>
        </StyledToobar>
      </AppBar>
      
  );
}
export default Headers;