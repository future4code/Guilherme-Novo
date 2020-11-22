import React from 'react';
import {Lista} from './Component/Lista.js'
import Usuarios from './Component/Usuarios.js'
import styled from 'styled-components';
import './App.css';
import axios from 'axios';

  export default class App extends React.Component{

    state = {
      criarUsuario : true
    }

  mudaTela = () => {
    this.setState ({criarUsuario: !this.state.criarUsuario})
  }

  render(){
    
    return (


      <div>
        <button onClick={this.mudaTela}> {this.state.criarUsuario ? "Ir para a lista" : "Voltar para o Usuário"}</button>
        {this.state.criarUsuario ? <Usuarios /> : <Lista />}
        <div>
            
        </div>
    </div>
    );
  }
  
}


