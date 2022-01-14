import React from 'react';
import styled from 'styled-components';



const CardPequenoStyle = styled.div`

    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 800px;
    
`;
 const NamesStyle = styled.h2`
    
    font-size: 16px;
    font-weight: 400;

 `;
const TextoDiv = styled.div`
     display: flex;
    justify-items: flex-start;
     gap:10px
`;





function CardPequeno(props) {
    return (
        <CardPequenoStyle>
            <TextoDiv>
                <h3>{ props.dados }</h3>
                <NamesStyle>{ props.informacao }</NamesStyle>
            </TextoDiv>
        </CardPequenoStyle>
    )
}

export default CardPequeno;