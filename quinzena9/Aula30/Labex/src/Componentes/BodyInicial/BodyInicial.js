import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"


const ContainerImg = styled.img`
  width: 50%;
  height: 50%;
  max-width:100%;
`


function BodyInicial() {

  const history = useHistory();

  const goToTravelList = () => {
    history.push("/Lista")
  }

  return (
    <div className="App">
      <ContainerImg src={'https://picsum.photos/800/800'}/>
      <button onClick={goToTravelList}>Lista de Viagens</button>
   </div>
  );
}

export default BodyInicial;
