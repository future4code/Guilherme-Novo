import axios from 'axios'
import React, { useState, useEffect }from 'react'
import ChooseButtons from './ChooseButtons'
import ProfileCard from './ProfileCard';
import styled from "styled-components"

const ContainerDiv = styled.div`
  background-color: #0d91ba
`

export default function ChooseProfilePage() {

  const [profileToChoose, setProfileToChoose] = useState(undefined) 

  const getProfileToChoose = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme/person").then(response => {
      setProfileToChoose(response.data.profile)
    })
  }

  const chooseProfile = (choice) => {
    const body = {
      choice: choice,
      id: profileToChoose.id
    }
    setProfileToChoose(undefined)

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme-novo/choose-person", body).then(response => {
      getProfileToChoose()
    })
  }
  useEffect(() => {
    getProfileToChoose()
  }, []);

  const onClickNo = () => {
    chooseProfile(false)
  }

  const onClickYes = () => {
    chooseProfile(true)
  }

  return (
    <ContainerDiv>
      { profileToChoose ? 
      ( <>
        <ProfileCard profile={profileToChoose}/>
        <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes}/>
      </>) : <p>Carregando...</p>
      }
    </ContainerDiv>
  )
}
