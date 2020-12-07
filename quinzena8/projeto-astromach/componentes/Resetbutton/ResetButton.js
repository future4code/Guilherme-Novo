import Axios from 'axios'
import React from 'react'
import axios from "axios"
import styled from "styled-components"

const ButtonContainer = styled.button`
  background-color: lightgreen;
  border-radius: 10%;
  font-size: 15px;
`

export default function ResetButton() {

  const onclickReset = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-novo/clear").then(response => {
    console.log(response)
    })
  }
  return (
    <div>
      <ButtonContainer onClick={onclickReset}>Resetar Curtidas</ButtonContainer>
    </div>
  )
}
