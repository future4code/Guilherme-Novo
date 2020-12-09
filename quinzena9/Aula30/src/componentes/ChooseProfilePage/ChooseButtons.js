import React from 'react'
import styled from "styled-components";


const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
const ButtonDesign = styled.button`
  background-color: lightgreen;
  border-radius: 10%;
  font-size: 15px;
`
export default function ChooseButtons(props) {
  return (
    <div>
      <ButtonsContainer>
        <ButtonDesign onClick={props.onClickYes}>Sim</ButtonDesign>
        <ButtonDesign onClick={props.onClickNo}>Não</ButtonDesign>
      </ButtonsContainer>
      
    </div>
  )
}
