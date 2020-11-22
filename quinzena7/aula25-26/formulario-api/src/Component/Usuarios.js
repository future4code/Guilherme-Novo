import React from 'react'
import styled from "styled-components"
import axios from "axios"
import {BASE_URL, axiosConfig} from "../constantes/requests"

const Secao = styled.section`
  background-color: #29408c;
  border: 1px solid black;
  text-align: center;
  padding: 30px 0px;
  margin: 20px 0px;
`

export default class Usuarios extends React.Component {

  state = {
    nome: "",
    email: ""
  }

  mudaNome = (event) => {
    this.setState ({nome: event.target.value})
  }

  mudaEmail = (event) => {
    this.setState ({email: event.target.value})
  }

  criarUsuario = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email
    }
    axios.post(`${BASE_URL}/users`, body, axiosConfig)
    .then((resposta)=> {
      alert(`O usuário ${this.state.nome} Cadastrado`)
      this.setState({nome: "", email:""})
  })
    .catch((error) => alert(error.message));
  };

  render() {
    return(
    <div>
      <Secao>
              <label>Nome: </label>
              <input
              value={this.state.nome}
              onChange={this.mudaNome}
              />
              <p>
              <label>Email: </label>
              <input
              value={this.state.email}
              onChange={this.mudaEmail}
              />
              </p>
            <button onClick={this.criarUsuario}>Enviar</button>
            </Secao>
    </div>
    )
  }
}