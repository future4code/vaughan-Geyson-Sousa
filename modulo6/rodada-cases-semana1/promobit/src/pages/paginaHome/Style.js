import styled from 'styled-components'

export const Lista =styled.div`
display: grid;
grid-template-columns: repeat(6,1fr) ;
width: 70%;
`
export const Imagem =styled.img`
    width:176px;
    height: 265px;
    border-radius:4px;
`
export const Post =styled.div`
display:flex;
flex-direction: column;
align-items: center;
`
export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin-top:30px;
`
export const ListaFilmes = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-bottom: 40px;
    row-gap:25px;
    
`
export const Cards =styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h5{
    width:176px;
    font-size: 15px;
    font-weight: 500;
    }
    p{
    font-size: 13px;
    color: #646464;
    line-height: 0px;
    }
    :hover{
    cursor: pointer;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    }
`

export const SubHeader =styled.div`
    height: 450px;
    color: #FFFFFF;
    background-color:#2D0C5E;
p{
    margin-top: 120px;
    font-size: 14px;
    text-align: center;
}

`
export const Texto1 = styled.div`
 display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 70px;
h1{
    margin: 0;
    line-height: 50px;
    font-family: Roboto;
    font-size: 40px;
    width: 700px;
    text-align: center;
}
`
export const Button= styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
button{
    text-align:center;
    margin-left:10px;
    font-weight: bold;
    font-size: 14px;
    color: #323232;
    padding: 8px 16px;
    height: 33px;
    border: transparent;
    border-radius: 5px;
    background-color: #fff;
    :active{
        background-color:green;
    }
:hover{
    cursor: pointer;
}
}
`
export const Paginacao =styled.div`
display: flex;
justify-content: center;
width: 100%;
padding-bottom: 10px;
`
