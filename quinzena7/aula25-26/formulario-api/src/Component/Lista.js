import Axios from 'axios'
import React from 'react'
import styled from "styled-components"
import {BASE_URL, axiosConfig} from "../constantes/requests"


const ContainerUsuario = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  margin: 10px 0;
  width: 100px;
`

// const dados = [
//   {
//     id: 1,
//     name: "batman"
//   }, 
//   {
//     id: 2,
//     name: "Robin"
//   }
// ];

  
export class Lista extends React.Component {

  state = {
    listaUsuario: []
  }

  componentDidMount() {
    this.pegarUsuario()
  };
  
  pegarUsuario = () => {
    Axios
    .get(`${BASE_URL}/users`, axiosConfig)
    .then((resposta) => this.setState({ listaUsuario: resposta.data }))
    .catch((error) => alert(error.message))
  };

  deletarUsuario = (id) => {
    Axios
    .delete(`${BASE_URL}/users/${id}`, axiosConfig)
    .then(() => {
      alert("Usuário deletado com sucesso!");
      this.pegarUsuario();
    })
    .catch((error) => alert(error.message))
  };

  render() {

    const renderizaLista = this.state.listaUsuario.map((usuario)=> {
    return (
      <ContainerUsuario key={usuario.id}>
      {usuario.name}
      <button onClick={() => this.deletarUsuario(usuario.id)}>X</button>
    </ContainerUsuario>
    )
  })
    return <div>{renderizaLista}</div>;     
    }
  }
