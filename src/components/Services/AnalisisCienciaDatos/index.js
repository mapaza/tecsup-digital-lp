import React, { useRef } from 'react'
import useSmoothScrolling from '../../../hooks/useSmoothScrolling';
import HeaderService from '../HeaderService';
import ShowMore from '../ShowMore';
// import { Route, useLocation } from 'react-router-dom'
import { Container, } from './styles'
import { Detail, SubService } from '../styles'
// import image from '../../assets/images/AnaliticaCienciaDatos.jpg'


const AnalisisCienciaDatos = () => {
  const wrapperRef = useRef(null);

  useSmoothScrolling(wrapperRef);

  return (
    <Container ref={wrapperRef}>
      <HeaderService
        title="Analítica y Ciencia de Datos"
        subtitle="Ayudamos a tu organización a maximizar el valor de sus datos, descubrir insights, construir planes y responder en tiempo real a la demanda de los clientes.
        Vaya más allá del qué. Obtenga el porqué, y planifique para lo que sigue.
        "
      />
      <Detail>
        <div className="left">
          <SubService>
            <p className="number">01</p>
            <p className="title">Business Intelligence</p>
            <p>
              Nos encargamos de analizar, estructurar y normalizar todos los modelos de datos disponibles dentro de tu organización.
            </p>
          </SubService>
          <SubService>
            <p className="number">02</p>
            <p className="title">Big data</p>
            <p>
              Basándonos en tecnologías de Inteligencia de Negocios (BI), te brindaremos la implementación de plataformas que te ayudarán a tomar decisiones dentro de tu organización
            </p>
          </SubService>
          <SubService>
            <p className="number">03</p>
            <p className="title">Data Science</p>
            <p>
              Daremos el mantenimiento necesario a tu arquitectura de datos, analizándolas y evaluando posibles mejoras que brindarán mejoras a tus flujos de información, otorgándote la posibilidad de realizar un escalamiento personalizado.
            </p>
            <ShowMore to="/servicios/data-science">
              Ver más
            </ShowMore>
          </SubService>
        </div>
        <img
          className="img"
          alt="análisis y ciencia de datos"
          src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602116743/Tecsup/AnaliticaCienciaDatos.jpg" />
      </Detail>
    </Container>
  )
}

export default AnalisisCienciaDatos;
