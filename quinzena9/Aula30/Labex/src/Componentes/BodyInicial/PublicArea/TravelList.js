import React from 'react'
import { useHistory } from 'react-router-dom';

function TravelList() {

  const history = useHistory();
  
  const goToFormulario = () => {
    history.push("/Formulario")
  }

  return (
    <div>
      <button onClick={goToFormulario}>Ir para Formulário</button>
    </div>
  )
}
export default TravelList;