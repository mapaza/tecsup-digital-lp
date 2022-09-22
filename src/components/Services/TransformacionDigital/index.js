import React from 'react'
// import { Route, useLocation } from 'react-router-dom'
import { Container } from './styles'
import { Detail, SubService, Subtitle } from '../styles'
import HeaderService from '../HeaderService'
import { useRef } from 'react'
import useSmoothScrolling from '../../../hooks/useSmoothScrolling'

const TransformacionDigital = () => {
  // const location = useLocation()
  // console.log(location);


  const wrapperRef = useRef(null);

  useSmoothScrolling(wrapperRef);

  return (
    <Container ref={wrapperRef}>
      <HeaderService
        title="Capacitación y entrenamiento inmersivo"
        subtitle=""
      />
      <Detail>
        <div className="left">
       
          
          <SubService>
          <p className='description'>
          Lleva la capacitación de tus colaboradores más allá de las aulas a través de una educación extendida que contempla:
          </p>
            <p className="number">01</p>
            <p className="title"> SIMULADORES BASADOS EN LA WEB</p>
            <p>
            Rompe las barreras de la presencialidad acercando a tus colaboradores a aprendizajes  virtuales a medida de acuerdo a las necesidades de tu organización. El objetivo es crear laboratorios educativos multidisciplinarios que puedan ser aprovechados para vivir una experiencia real
            </p>
            <br/>
            <p>Podrás Desarrollar:</p>
            <ul>
              <li>
                Simuladores
              </li>
              <li>
                Inducciones
              </li>
              <li>
                Tareas de varios pasos, etc.
              </li>
            </ul>
          </SubService>
          <SubService>
            <p className="number">02</p>
            <p className="title">ESCENARIOS 3D INTERACTIVOS</p>
            <p>Potencia el aprendizaje de tus colaboradores utilizando escenarios virtuales a medida que les permitirán llevar la educación digital a una experiencia 100% real e inmersiva de fácil recordación y de mayor aprovechamiento a través de diferentes dispositivos móviles.</p>
          </SubService>
          <SubService>
            <p className="number">03</p>
            <p className="title">LABORATORIOS REMOTOS</p>
            <p>Ten la posibilidad de desarrollar un aprendizaje real y 100% práctico desde donde estés a través del desarrollo tecnológico e innovador de plataformas de aprendizaje que permitirán la manipulación de equipos o sistemas a través de un computador, tablet o smartphone.
</p>
          </SubService>
        </div>
        <img
          className="img"
          alt="transformación digital"
          src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602116758/Tecsup/TransformacionDigital.jpg" />
      </Detail>
    </Container>
  )
}

export default TransformacionDigital;
