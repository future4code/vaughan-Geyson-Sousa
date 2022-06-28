import React, { useState } from 'react'
import parte from '../../Assets/parte.png'
import LogoSena from '../../Assets/LogoSena.png'
import megasena from '../../Assets/megasena.png'
import {Container,Block1,Block2} from "./Styled"
import {BASE_URL} from '../../Constants/Urls'
import UseRequestData from '../../Hooks/UseRequestData'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'


const HomePage = () => {
    const data = UseRequestData([], `${BASE_URL}/loterias`)
    const dataSortion = UseRequestData([], `${BASE_URL}/loterias-concursos`)
    const [loteriesData, setLoteriasData] = useState("")
    

    const handleSort =(ev)=>{
      setLoteriasData(ev.target.value)
    }
    const mapData = data[0] && data[0].map((lot)=>{
      return(
          
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sorteio</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={loteriesData}
            onChange={handleSort}
            label="Sorteio"
            defaultValue={data?.[0]?.nome}
          >
            <MenuItem value={10}>{lot.nome}</MenuItem>
            <MenuItem value={20}>{lot.nome}</MenuItem>
            <MenuItem value={30}>{lot.nome}</MenuItem>
          </Select>
        </FormControl>
          
    );
      
    })
  return (
    
    <Container>
       {mapData}

      <Block1>
      
         <img src ={parte}/>
         <img src ={LogoSena}/>
         <img src ={megasena}/> 
       
         </Block1>

         
    </Container>
  )
}

export default HomePage
