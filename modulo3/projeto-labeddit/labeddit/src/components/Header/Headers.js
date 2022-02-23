import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import React from 'react' 
import Logo from '../../assets/Logo.png'
import {Img, StyledToobar} from './style'
import {useNavigate} from "react-router-dom"
import { irParaFeed, irParaLogin} from '../../routes/Cordenadas';

 function Headers() {

  const navigate =useNavigate()

  return (
    
      <AppBar position="static">
        <StyledToobar>
          <Button onClick={()=>irParaFeed(navigate)}> <Img src={Logo} alt ="Logomarca"/></Button>
          <Button color="inherit" onClick={()=>irParaLogin(navigate)}
          >Login</Button>
        </StyledToobar>
      </AppBar>
    
  );
}
export default Headers;