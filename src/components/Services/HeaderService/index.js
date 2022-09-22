import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { Title, Subtitle } from '../../FirstSection/styles';

import TransformacionDigitalSVG from './TransformacionDigitalSVG';
import CienciaDatosSVG from './CienciaDatosSVG';
import DigitalizacionProcesosSVG from './DigitalizacionProcesosSVG';
import GestionConocimientoSVG from './GestionConocimientoSVG';
import { Container, Content, IconsLayer } from './styles';
import { useCallback } from 'react';
import MonitoreoCondicionesSVG from './MonitoreoCondicionesSVG';
import EducacionExtendidaSVG from './EducacionExtendidaSVG';
// import { useLoader } from 'react-three-fiber';


function HeaderService({ title, subtitle }) {

  // const loader = useLoader()


  const location = useLocation();


  const isActive = useCallback((currentPahtname) => {
    if (location.pathname === currentPahtname) {
      return true

    }

    return false
  }, [location])

  return (
    <Container>
      <Content>
        <div className="wrapper-text">
          <Title
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
            exit={{ opacity: 0 }}
          >
            {title}
          </Title>
          <Subtitle initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, delay: 1 } }}
            exit={{ opacity: 0 }}>
            {subtitle}
          </Subtitle>
        </div>
        <IconsLayer>
          <Link to="/servicios/capacitacion-y-entrenamiento-inmersivo">
            
            <div className={`circle ${isActive("/servicios/capacitacion-y-entrenamiento-inmersivo") ? "active" : ""}`}  style={{border: '3px solid white', width: '90px', height:'90px', marginRight:'2.5vh'}} >
              <TransformacionDigitalSVG />
            </div>
          </Link>
          <Link to="/servicios/instructivos-para-operaciones-y-mantenimiento">
            <div className={`circle ${isActive("//servicios/instructivos-para-operaciones-y-mantenimiento") ? "active" : ""}` } style={{border: '3px solid white', width: '90px', height:'90px', marginRight:'2.5vh'}} >
              <GestionConocimientoSVG />
            </div>
          </Link>
          <Link to="/servicios/monitoreo-de-condiciones-y-visualización-de-datos-operativos">
            <div className={`circle ${isActive("/servicios/monitoreo-de-condiciones-y-visualización-de-datos-operativos") ? "active" : ""}`} style={{border: '3px solid white', width: '90px', height:'90px', marginRight:'2.5vh'}} >
             {/*  <MonitoreoCondicionesSVG /> */}
              <DigitalizacionProcesosSVG />
            </div>
          </Link>
          <Link to="/servicios/educación-extendida">
            <div className={`circle ${isActive("/servicios/educación-extendida") ? "active" : ""}`}style={{border: '3px solid white', width: '90px', height:'90px', marginRight:'2.5vh'}} >
              <EducacionExtendidaSVG/>
            </div>
          </Link>
        </IconsLayer>
      </Content>
    </Container >
  );
}

export default HeaderService;
