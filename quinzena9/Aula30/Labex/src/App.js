import React from "react"
import AppBar from "./Componentes/AppBar/AppBar"
import BodyInicial from "./Componentes/BodyInicial/BodyInicial"
import './App.css';
import styled from "styled-components"
import LoginScreen from './Componentes/BodyInicial/LoginScreenAdm/LoginScreen';
import Router from "./Componentes/Router/Router";


const ContainerApp = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  border: 1px solid black;
`

function App() {
  return (
    <ContainerApp>
      <Router/>
      {/* <BodyInicial/> */}
   </ContainerApp>
  );
}

export default App;
