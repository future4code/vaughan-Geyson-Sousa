import React from "react";


class Terceiro extends React.Component {
    render() {
        return (
            <div>
                <h3> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input></input>
                <p>6. Você fez algum curso complementar?</p>
                <input></input>
                <div className = "botao">
                    <button onClick={this.props.Agradecimentos}>Próxima etapa</button>
                </div>
            </div>
        );

    }
}

export default Terceiro;