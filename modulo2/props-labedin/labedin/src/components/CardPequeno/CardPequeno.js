import React from 'react';
import './app.js'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <div>
                <h4>{ props.dados }</h4>
                <h2>{ props.informacao }</h2>
            </div>
        </div>
    )
}

export default CardPequeno;