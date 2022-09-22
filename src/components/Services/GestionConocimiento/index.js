import React, { useRef } from 'react'

import useSmoothScrolling from '../../../hooks/useSmoothScrolling';
import HeaderService from '../HeaderService';
import ShowMore from '../ShowMore';
// import { Route, useLocation } from 'react-router-dom'
import { Container } from './styles'
import { Detail, SubService } from '../styles'

import image from '../../../assets/images/gestion_conocimiento.png'


const AnalisisCienciaDatos = () => {
  const wrapperRef = useRef(null);

  useSmoothScrolling(wrapperRef);

  return (
    <Container ref={wrapperRef}>
      <HeaderService
        title="Instructivos para operaciones y mantenimiento"
        subtitle=""
      />
       <Detail>
        <div className="left">
       
          
          <SubService>
          <p className='description'>
          Desarrolla los instructivos que necesitas en tu organización para ayudar a mejorar las operaciones o mantenimientos internos. 
          Obtén guías a través de realidad aumentada y mixta.

          </p>
          <br/>
            <p>Podrás Desarrollar:</p>
            <br/>
            <p className="number">01</p>
            <p className="title"> Tutor Digital</p>
            <p>
            Aplicativo que utiliza la RA y RM para entregar elementos altamente visuales e interactivos para presentar información digital relevante dentro de un contexto físico real.

            </p>

            
          </SubService>
          <SubService>
            <p className="number">02</p>
            <p className="title">Asistencia Remota</p>
            <p>
            Desarrollo de software de acceso remoto para dar al especialista/experto acceso instantáneo al dispositivo remoto desde cualquier lugar y en cualquier momento.

            </p>
           
          </SubService>
        </div>
        <img className="img" alt="análisis y ciencia de datos" src={image} />
      </Detail>
    </Container>
  )
}

export default AnalisisCienciaDatos;
