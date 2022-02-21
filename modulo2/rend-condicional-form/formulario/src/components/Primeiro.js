import React from "react";


class Primeiro extends React.Component {
   render(){
    return (
       <div>
        <h3> ETAPA 1 - DADOS GERAIS</h3>
        <p>1. Qual o seu nome?</p>
          <input></input>
        <p>2. Qual a sua idade?</p>
         <input></input>
        <p>3. Qual o seu email?</p>
         <input ></input>
        <p>4. Qual a sua escolaridade?</p>
         <select>
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo</option>
            <option>Ensino superior incompleto</option>
            <option>Ensino superior completo</option>
         </select>
         <div className = "botao">   
         <button onClick={this.props.Segundo}>Próxima etapa</button>
         </div>
         </div>
    );
   }
  }
  
  export default Primeiro;