
import React from "react";


class Segundo extends React.Component{
    render() {
        return (
            <div>
                <h3> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <p>5. Qual curso?</p>
                <input></input>
                <p>6. Qual a unidade de ensino?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                </select>
                <div className = "botao">
                <button onClick={this.props.Terceiro}>Próxima etapa</button>
                </div>
            </div>
        );
    }

}

export default Segundo;