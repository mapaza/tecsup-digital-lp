import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
  Switch
} from "react-router-dom";
import React, { Component, useRef,useEffect }  from 'react';

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
import Services from "./components/Services";
import Contact from "./components/Contact";
import Cases from "./components/Cases";
import NotFound from "./components/NotFound";
import BoxModel from "./components/FirstSection/BoxModel";

import modelBomba from "./assets/hidrociclon2/hidrociclon.glb";
import modelHidrociclon from "./assets/turbine/bomba.glb";

export default function App() {
  
  return (
    <Main>
       <LoaderContext>
        <Router>
            <Header/>  
        
                   
            <Switch>
              <Route exact path="/" component={SectionsWrapper} />
              <Route path="/servicios" component={Services} />
              <Route path="/casos" component={Cases} />
              <Route path="/contacto" component={Contact} />
              <Route component={NotFound} />
            </Switch>
            
            <GlobalStyles />
        </Router>
        </LoaderContext>
       </Main>
  );
}
