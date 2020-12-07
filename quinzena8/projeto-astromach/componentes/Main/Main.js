import React, {useState, useEffect} from 'react'
import AppBar from '../AppBar/AppBar'
import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage'
import MatchListPage from '../MatchListPage/MatchListPage'
import styled from "styled-components";

const MainContainer = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  width: 400px;
  height: 600px;
  margin: 30px;
  display: flex;
  flex-direction: column;
`

export default function Main() {

  const [selectPage, setSelectPage] = useState("choose-profile")

    const renderSelectPage = () => {
      switch(selectPage) {
        case "choose-profile": 
          return <ChooseProfilePage />
        case "match-list":
          return <MatchListPage />
        default:
          return <ChooseProfilePage />
      }
    }

  const goToChooseProfilePage = () => {
    setSelectPage('choose-profile')
  }

  const goToMatchListPage = () => {
    setSelectPage('match-list')
  }
    return ( 
    <MainContainer>
      <AppBar 
        goToChooseProfilePage={goToChooseProfilePage} 
        goToMatchListPage={goToMatchListPage}
      />
      {renderSelectPage()}
    </MainContainer>
  )
}
