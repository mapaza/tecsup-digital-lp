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
            Desarrolla los instructivos que necesitas en tu organización para ayudar a mejorar las operaciones o mantenimientos internos. <br/> 
Obtén guías a través de realidad aumentada y mixta.
          </p>
           
            <br/>
            <p>Podrás Desarrollar:</p>
            <br/>
            <ul>
              <li>
              <strong>Tutor Digital:</strong> Aplicativo que utiliza la RA y RM para entregar elementos altamente visuales e interactivos para presentar información digital relevante dentro de un contexto físico real.

              </li>
              <br/>
              <li>
              <strong>Asistencia Remota:</strong> Desarrollo de software de acceso remoto para dar al especialista/experto acceso instantáneo al dispositivo remoto desde cualquier lugar y en cualquier momento.

              </li>
              
            </ul>

            {/*
             <ShowMore to="/servicios/plataforma-de-gestión-del-conocimiento-industrial-4-0">
              Ver Más
            </ShowMore> */}
          </SubService>
         {/*  <SubService>
            <p className="number">02</p>
            <p className="title">Instructivos de mantenimiento con realidad aumentada</p>
            <p>
              Esta aplicación permite al usuario ver objetos generados por ordenador dentro de su campo visual, y la posibilidad de interactuar en diferentes situaciones que mezclan lo material y lo artificial.
            </p>
            <ShowMore to='/servicios/instructivos-de-mantenimiento-con-realidad-aumentada' >
              Ver Más
            </ShowMore>
          </SubService> */}
        </div>
        <img className="img" alt="análisis y ciencia de datos" src={image} />
      </Detail>
    </Container>
  )
}

export default AnalisisCienciaDatos;
