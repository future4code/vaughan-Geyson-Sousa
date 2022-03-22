import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Logo from '../../assets/Logo.png'
import { Img, StyledToobar } from './style'
import { useNavigate } from "react-router-dom"
import { irParaFeed, irParaLogin } from '../../routes/Cordenadas';



function Headers ({textoCerto, setTextoCerto}){
  
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const deslogar =() =>{
    localStorage.removeItem("token")
  }

  const mudarAcaoButao=()=>{
    if(token){
      deslogar()
      setTextoCerto("login")
      irParaLogin(navigate)
    }else{
      irParaLogin(navigate)
    }
  }
  return (
      
      <AppBar position="static">
        <StyledToobar>
          <Button onClick={() => irParaFeed(navigate)}> <Img src={Logo} alt="Logomarca" /></Button>
          <Button color="inherit" onClick={mudarAcaoButao}
          >{textoCerto}</Button>
        </StyledToobar>
      </AppBar>
      
  );
}
export default Headers;