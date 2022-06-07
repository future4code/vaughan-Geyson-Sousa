import React from 'react'
import parte from '../../Assets/parte.png'
import LogoSena from '../../Assets/LogoSena.png'
import megasena from '../../Assets/megasena.png'
import {Container,Block1,Block2} from "./Styled"
import {BASE_URL} from '../../Constants/Urls'
import UseRequestData from '../../Hooks/UseRequestData'

const HomePage = () => {
    const data= UseRequestData([], `${BASE_URL}/loterias`)
    console.log(data[0])

  return (
    <Container>
      <Block1>
         <img src ={parte}/>
          <Block2>
         <img src ={LogoSena}/>
         <img src ={megasena}/> 
         </Block2>
         </Block1>
   
    </Container>
  )
}

export default HomePage
