import React from 'react';
import Logo from '../../assets/logo.png';
import { Img,Div } from './Styled'

const Header = () => {
    return (
       
        <Div>
            <Img src={Logo}/>
        </Div>

    )
}
export default Header