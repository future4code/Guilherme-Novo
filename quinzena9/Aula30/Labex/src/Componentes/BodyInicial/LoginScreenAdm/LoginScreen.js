import React from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AdmViagens from "../LoginScreenAdm/AdmViagens"

const ContainerLogin = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  width: 180px;
  border: 1px solid black;
  margin: 200px 200px ;
  padding: 50px;
  align-items: center;
`
const LoginScreen = () => {
  
  const history = useHistory();

  const goToAdmPage = () => {
    history.push("/AdmViagens")
  }
  return (
    <div>
      <p>Área do Administrador</p>
        <ContainerLogin>
          <span>Email:</span>
            <input></input>
          <p>Senha:</p>
            <input></input>
          <button onClick={goToAdmPage}>Entrar</button>
        </ContainerLogin>      
   </div>
  );
}
export default LoginScreen;
