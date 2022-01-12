import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import GeysonImagem from './imagem/Geyson.jpg';
import styled from 'styled-components';


const StyleApp = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

`;

const  ContainerStyle = styled.div`
  width: 52vw;
  margin: 10px 0;

`;

const H2Style = styled.h2`
   display: flex;
  justify-content: center;
  margin-bottom: 20px;

`;

const H3Style = styled.h3`
  text-align: center;
  margin-bottom: 20px;

`;


function App() {
  return (
    <StyleApp>
      <ContainerStyle>
        <H2Style>Dados pessoais</H2Style>
        <CardGrande 
          imagem= {GeysonImagem} 
          nome="Geyson Mesquita" 
          descricao="Oi, eu sou o Geyson, tenho 21 anos atualmente estou cursando o modulo 2 do curso full stack na instituição Labenu, e o 8° periodo de ciências Contabeis na FMJS.
         Trabalhei como jovem aprendiz na instituição Distak distribuidora, excercendo o cargo de auxiliar administrativo bem como auxiliar de RH no ano 
         2017-2018, também trabalhei como almoxarife na escola CMT-V no ano 2019, por fim trabalhei como operador de telemarkenting na empresa Athena Saúde no ano 2021
            ."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </ContainerStyle>
    
       <ContainerStyle>
       <CardPequeno  
        dados="Email:" 
        informacao="Geysonlabenu@gmail.com"
        />

        <CardPequeno
        dados= "Endereço:"
        informacao="Rua arrowfunction  n°357 bairro funcaopai"
        />  


       </ContainerStyle>

      <ContainerStyle>
        <H2Style>Experiências profissionais</H2Style>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </ContainerStyle>

      <ContainerStyle>
        <H2Style>Minhas redes sociais</H2Style>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </ContainerStyle>
    </StyleApp>
  );
}

export default App;
