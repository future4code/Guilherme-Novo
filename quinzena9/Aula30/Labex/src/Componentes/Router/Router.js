import React from 'react'
import {  BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../../App'
import AppBar from '../AppBar/AppBar'
import BodyInicial from '../BodyInicial/BodyInicial'
import AdmViagens from '../BodyInicial/LoginScreenAdm/AdmViagens'
import LoginScreen from '../BodyInicial/LoginScreenAdm/LoginScreen'
import CriarDeletar from "../BodyInicial/LoginScreenAdm/CriarDeletar"
import AdmCandidaturas from '../BodyInicial/LoginScreenAdm/AdmCandidaturas'
import TravelList from "../BodyInicial/PublicArea/TravelList"
import Formulario from "../BodyInicial/PublicArea/Formulario"

export default function Router() {
  return (
    <BrowserRouter>
    <AppBar />
      <Switch>
        
        <Route exact path="/">
          <BodyInicial />
        </Route>

        <Route exact path="/Lista">
          <TravelList />
        </Route>

        <Route exact path="/Formulario">
          <Formulario />
        </Route>

        <Route exact path="/Login">
          <LoginScreen />
        </Route>

        <Route exact path="/AdmViagens">
          <AdmViagens />
        </Route>
        
        <Route exact path="/CriarDeletar">
          <CriarDeletar />
        </Route>

        <Route exact path="/Candidaturas">
          <AdmCandidaturas />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
