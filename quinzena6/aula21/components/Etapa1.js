import React from "react";

export default class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <p>1. Qual o seu nome?</p>
        <input></input>
        <p>2. Qual o sua idade?</p>
        <input></input>
        <p>3. Qual o seu email?</p>
        <input></input>
        <p>1. Qual o sua escolaridade?</p>
        <div>
          <select>
            <option valeu="Ensino médio incompleto">
              Ensino médio incompleto
            </option>
            <option valeu="Ensino médio completo">Ensino médio completo</option>
            <option valeu="Ensino superior incompleto">
              Ensino superior incompleto
            </option>
            <option valeu="Ensino superior completo">
              Ensino superior completo
            </option>
          </select>
        </div>
      </div>
    );
  }
}