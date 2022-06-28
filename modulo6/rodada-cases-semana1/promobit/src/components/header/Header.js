import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Img,Div } from './Styled'
import {irParaHome} from '../../routes/Coordenadas'

const Header = () => {
    const Navigate = useNavigate()
    const funcaoHome = () => {
        irParaHome(Navigate)
      }
    return (
       
        <Div>
            <Img src={Logo} onClick={funcaoHome}/>
        </Div>

    )
}
export default Header