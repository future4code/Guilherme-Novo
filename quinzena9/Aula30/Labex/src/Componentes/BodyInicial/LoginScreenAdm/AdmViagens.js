import React from "react";
import { useHistory } from "react-router-dom";

  
const AdmViagens = () => {
  
    const history = useHistory();
  
    const goToCriarDeletar = () => {
      history.push("/CriarDeletar")
    }
    const goToCandidaturas = () => {
      history.push("/Candidaturas")
  }

  return (
    <div className="App">
      <button onClick={goToCriarDeletar}>Criar e Deletar Usuarios</button>
      <button onClick={goToCandidaturas}>Administrar Candidaturas</button>
   </div>
  );
}

export default AdmViagens;