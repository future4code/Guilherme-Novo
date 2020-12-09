import React from 'react'
import styled from "styled-components";


const AppBarContainer = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  align-items: center;
  padding: 0 8px;
`
const ButtonContainer = styled.button`
  background-color: lightgreen;
  border-radius: 10%;
  font-size: 15px;
`
const Astromatch = styled.p`
  font-family: fantasy;
  font-size: 24px;
`

export default function AppBar(props) {
  return (
    <AppBarContainer>
      <ButtonContainer onClick={props.goToChooseProfilePage}>Escolher</ButtonContainer>
      <Astromatch>Astromatch</Astromatch>
      <ButtonContainer onClick={props.goToMatchListPage}>Lista</ButtonContainer>
    </AppBarContainer>
  )
}
