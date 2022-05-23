import styled from 'styled-components'

export const Img = styled.img`
width:320px;
border-radius:4px;
box-shadow: -4px 3px 8px -4px #000000;
margin-top: 70px;
`
export const Nome = styled.div`
font-family: 'Roboto', sans-serif;
width:100vw;
 display: flex;
 align-items: center;
 justify-content:center;
 flex-direction: column;
`
export const ContainerInfo = styled.div`
margin-left:50px;
    margin-top: 65px;
`
export const Info = styled.div` 
    display:flex;
    font-weight:200;
    gap: 8px;
    font-size: 14px;
`
export const SubHeader = styled.div`
    display: flex;
    height: 500px;
    justify-content:center;
    color: #FFFFFF;
    background-color:#2D0C5E;
h1{
    font-size: 32px;
    line-height: 1px;
}
`
export const Avaliacao = styled.div`
     font-size: 13px;
    font-weight:200;
    display: flex;
    button{
        background-color: rgba(255, 255, 255, 0.1);
        width:60px;
        height:60px;
        border-radius: 400px;
        border: 7px solid #14FF00;
        color: #14FF00;
    }
   
div{
    width: 28%;
}
p{
    width: 18%;
    margin-left: -17%;
}
`
export const Sinopse = styled.div`
    display:flex;
    flex-direction: column;
    width: 660px;
    margin-top: 30px;
h1{
    font-size: 15px;
    font-weight: bold;
}
p{
    font-size:12px;
    font-weight:200;
}
`
export const TextoSinopse = styled.p`
position: relative; bottom: 45rem; left: 31.4rem;
width:40rem;
font-family: 'Roboto', sans-serif;
color: white;
font-size:15px;
`
export const Generos = styled.p`
display:flex;
gap:9px;
position: relative; bottom: 61.8rem; left: 42.6rem;
width:40rem;
font-family: 'Roboto', sans-serif;
font-size:80%;
color: white;
`
export const Data = styled.p`

position: relative; bottom: 45.9rem; left: 35.2rem;
font-family: 'Roboto', sans-serif;
font-size:80%;
color: white;
`
export const Recomendacao = styled.p`
position: relative; bottom: 59.1rem; left: 31.4rem;
font-family: 'Roboto', sans-serif;
font-size:90%;
color: white;
`

export const Elencos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 191px;
    height: 325px;
    border-radius: 4px;
    margin: 10px;
    font-size: 13px; 
`

export const Cards = styled.div`
img{
    margin: 8px 8px 8px 8px;
    width: 175px;
    height: 240px;
    border-radius:4px;
}
p{
    width: 175px;
    margin-left: 10px;
    line-height: 10px;
}
`

export const Container = styled.div`
    width: 83%;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
::-webkit-scrollbar{
    background-color: #D3D3D3;
    height:12px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
::-webkit-scrollbar-thumb{
    background-color: #9E9E9E;
    border-radius: 5px;
    width: 398px;
}
`

export const DivElenco = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export const TextoElen = styled.div`
    margin-top: 120px;
    margin-left: 240px;
    font-size: 25px;
    font-weight: bold;
    color:#131313;
 `

export const FilmesOutros = styled.div`
 img{
 border-radius:4px;
 width:176px;
}
 `

export const CardRecomen = styled.div`
 width:100vw;
 display: flex;
 align-items: center;
 justify-content: center;
 gap:20px
 `

export const TextoRecomend = styled.div`
 p{
 display: flex;
 align-items: center;
 justify-content: center;
 font-size:25px;
 }
 `
export const TrailerDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
margin-bottom: 10rem;
iframe{
    width: 55vw;
    height: 75vh;
}
h5{
    font-size:25px
}
`

