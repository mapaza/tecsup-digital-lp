import React, { useEffect } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import SectionsWrapper from './components/SectionsWrapper';
import BoxModel from './components/FirstSection/BoxModel';
import Loader from './components/Loader';
import Services from './components/Services';
import Cases from './components/Cases';
import Contact from './components/Contact';
import Survey from './components/Survey';
import LoaderContext from './components/Loader/LoaderContext';
import ChatBot from './components/ChatBot';

import Header from './components/Header';
import { Main } from './styles/styles';
import { useRef } from 'react';
// import ReactGA from 'react-ga';


export default function App() {

  // ReactGA.initialize('UA-167945668-1');

  // const trackPage = (page) => {
  //   ReactGA.set({ page });
  //   ReactGA.pageview(page);
  // };

  // const childRef = useRef();
  // let location = useLocation();

  // useEffect(()=>{
  //   const page = location.pathname;
  //   document.body.classList.add('is-loaded');
  //   childRef.current.init();
  //   trackPage(page);
  // }, [location]);
  // const location = useLocation();
  const mesh = useRef(null);
  const mesh2 = useRef(null);

  // console.log(location);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, []);

  // console.log(window.location.pathname !== "/");




  return (
    <Main>
      <LoaderContext>
        <BrowserRouter>
          <Header />
          <div style={{ opacity: 0, zIndex: -1, overflow: "hidden", width: 1, height: 1, position: "absolute" }}>
            {window.location.pathname !== "/" && <BoxModel mesh={mesh} pathModel='/hidrociclon2/hidrociclon.glb' />}
            {window.location.pathname !== "/" && <BoxModel mesh={mesh2} pathModel='/turbine/bomba.glb' />}
          </div>

          {/* <Switch location={location} key={location.pathname}> */}
          <Route exact path="/" component={SectionsWrapper} />
          <Route path="/servicios" component={Services} />
          <Route path="/casos" component={Cases} />
          <Route path="/contacto" component={Contact} />
          <Route path="/transformacion-digital" component={Survey} />
          {/* </Switch> */}
          <Loader />
          <GlobalStyles />
        </BrowserRouter>
        <ChatBot />
      </LoaderContext>
    </Main >
  )
}
