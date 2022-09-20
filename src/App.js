import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
  Switch
} from "react-router-dom";
import React, { Component }  from 'react';

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import { Main } from "./styles/styles";
import GlobalStyles from "./styles/GlobalStyles";
import LoaderContext from "./components/Loader/LoaderContext";
import SectionsWrapper from "./components/SectionsWrapper";
import TransformacionDigital from "./components/Services/TransformacionDigital"
import GestionConocimiento from "./components/Services/GestionConocimiento"
import Plataforma4 from "./components/Services/GestionConocimiento/Plataforma4"
import InstructivosRA from "./components/Services/GestionConocimiento/InstructivosRA"
import DigitalizacionProcesos from "./components/Services/DigitalizacionProcesos"
import LaboratoriosWeb from "./components/Services//DigitalizacionProcesos/LaboratoriosWeb"
import AnalisisCienciaDatos from "./components/Services/AnalisisCienciaDatos"
import DataScience from "./components/Services/AnalisisCienciaDatos/DataScience"

export default function App() {
  return (
    <Main>
       <LoaderContext>
        <Router>
            <Header/>           
            <Switch>
              <Route exact path="/" component={SectionsWrapper} />
              <Route
        path="/servicios/transformacion-digital"
        component={TransformacionDigital}
      />
      <Route
        path="/servicios/gestion-del-conocimiento"
        component={GestionConocimiento}
      />
      {/* ------ Inicio Gestion Conocimiento ------ */}
      <Route
        path="/servicios/plataforma-de-gestión-del-conocimiento-industrial-4-0"
        component={Plataforma4}
      />
      <Route
        path="/servicios/instructivos-de-mantenimiento-con-realidad-aumentada"
        component={InstructivosRA}
      />
      {/* ------ Fin Gestion Conocimiento ------ */}
      <Route
        path="/servicios/digitalizacion-de-procesos"
        component={DigitalizacionProcesos}
      />

      {/* ------ digitalizacion-de-procesos ------ */}
      <Route path="/servicios/laboratorios-web" component={LaboratoriosWeb} />
      {/* ------ Fin digitalizacion-de-procesos ------ */}

      <Route
        path="/servicios/analitica-y-ciencia-de-datos"
        component={AnalisisCienciaDatos}
      />
      {/* ------ Inicio Analitica y ciencia de datos ------ */}
      <Route path="/servicios/data-science" component={DataScience} />
      {/* ------ Fin Gestion Analitica y ciencia de datos ------ */}
            </Switch>
            <GlobalStyles />
        </Router>
        </LoaderContext>
       </Main>
  );
}
