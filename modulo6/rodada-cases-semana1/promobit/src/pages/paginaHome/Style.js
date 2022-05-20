import styled from 'styled-components'


export const Lista =styled.div`
display: grid;
grid-template-columns: repeat(6,1fr) ;
`
export const Imagem =styled.img`
 
 height:265px;
 border-radius:4px;
 width:176px;
`
export const Post =styled.div`
 display:flex;
 flex-direction: column;
 align-items:flex-start;
 
`
export const Cards =styled.div`
margin: 35px;

`
export const SubHeader =styled.div`
background-color: #2D0C5E;
width:1520px;
height:370px;

`
export const Texto1 = styled.h1`
 margin:0;
 color:white;
 font-family: 'Roboto', sans-serif;
 position: relative; top: 20px; left: 470px;
 width:470px;
`
export const Texto2 = styled.p`
 margin:0;
 color:white;
 position: relative; top: 80px; left: 630px;
 font-family: 'Roboto', sans-serif;
 width:470px;
`
export const Button= styled.div`
 color:white;
 position: relative; top: 100px; left: 630px;
 display: flex;
 justify-content:center;
 gap:16px;
 font-family: 'Roboto', sans-serif;
 border-radius:20px;
 width:400px;
 position: relative; top: 115px; left: 550px;
`
