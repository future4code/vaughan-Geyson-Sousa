import styled from "styled-components"

export const Buttons = styled.button`
background-color: transparent;
    border: none;
&:hover {
    cursor: pointer;
}
`
export const ImgLogo= styled.img`
width: 13rem;
` 
export const ImgBack= styled.img`
height: 3rem;
width: 3rem;
`
export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`
export const CardGeral = styled.div`
    width: 25rem;
    height: 40rem;
    background-color: #790F00;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: #FAF072;
`
export const DivContainer = styled.div`
    margin: 50px;
    display: flex;
    justify-content: center;
    flex-direction:column;
`