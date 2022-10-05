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
import Loader from "./components/Loader";
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
import VideoPlayer from "./components/VideoPlayer";

import modelBomba from "./assets/hidrociclon2/hidrociclon.glb";
import modelHidrociclon from "./assets/turbine/bomba.glb";

export default function App() {

  const mesh = useRef(null);
  const mesh2 = useRef(null);

  // console.log(location);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <Main>
       <LoaderContext>
        <Router>
            <Header/>  
            <div
              style={{
                opacity: 0,
                zIndex: -1,
                overflow: "hidden",
                width: 1,
                height: 1,
                position: "absolute",
              }}
            >
              {window.location.pathname !== "/" && (
                <BoxModel mesh={mesh} pathModel={modelHidrociclon} />
              )}
              {window.location.pathname !== "/" && (
                <BoxModel mesh={mesh2} pathModel={modelBomba} />
              )}
            </div>         
            <Switch>
              <Route exact path="/" component={SectionsWrapper} />
              <Route path="/servicios" component={Services} />
              <Route path="/casos" component={Cases} />
              <Route path="/contacto" component={Contact} />
              <Route path="/video" component={VideoPlayer} />
            {/*   <Route component={NotFound} /> */}
            </Switch>
            <Loader />
            <GlobalStyles />
        </Router>
        </LoaderContext>
       </Main>
  );
}
