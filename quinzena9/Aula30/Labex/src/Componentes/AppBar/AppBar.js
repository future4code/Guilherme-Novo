import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"; 

const ContainerApp = styled.header`
    background-color: black;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const BotãoAppBar = styled.button`
    height: 30px;
    width: 100px;
`
const Labexh1 = styled.h1`
  color: white;
`

const AppBar = () => {
    
  const history = useHistory();

  const goToLoginPage = () => {
      history.push("/Login");
    }

  return (
    <ContainerApp>
        <Labexh1>Labex</Labexh1>
        <BotãoAppBar onClick={goToLoginPage}>Login Adm</BotãoAppBar>
     </ContainerApp>
   
  );
}

export default AppBar;
