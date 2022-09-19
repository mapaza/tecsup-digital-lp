import React from 'react'
// import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container, OverlayBody, StickyContainer, Subtitle, Title, ImageContainer, ModelWrapper } from './styles'
// import ServicesImg from '../../assets/images/Services.jpg'

// import SectionsContext from '../SectionsWrapper/SectionsContext'
// import useWrapperScroll from '../SectionsWrapper/useWrapperScroll'
import ButtonCircle from '../ButtonCircle'
import { forwardRef } from 'react'
import BoxModel from '../FirstSection/BoxModel'
import { useRef } from 'react'

function SecondSection(props, ref) {
  const meshRef = useRef(null);

  return (
    <Container id="second" ref={ref}>
      <StickyContainer>
        <OverlayBody>
          <Title
            exit={{ opacity: 0 }}
          // style={{ opacity: opacityTitle }}
          >
            Nuestros Servicios
          </Title>
          <Subtitle exit={{ opacity: 0 }}>
            Explore todas las soluciones y servicios de software para Transformación digital, Gestión del Conocimiento, Digitalización de Procesos, Analítica y Ciencia de Datos y más para potenciar su fuerza de trabajo y superar el ritmo de la innovación.
          </Subtitle>
          <Link to="/servicios/transformacion-digital">
            <ButtonCircle black canAnimate delay={0}>
              VER LOS SERVICIOS
            </ButtonCircle>
          </Link>
        </OverlayBody>

        <ImageContainer>
          <ModelWrapper>
            <BoxModel
              ref={meshRef}
              pathModel='/turbine/bomba.glb'
              // meshProps={initialMeshValues}
              camera={{ fov: 20, position: [10, -15, 0] }}
              // style={{ width: "100%", height: '100%' }}
              enabledZoomIn={false}
              enabledOrbitControls={true}
            />
          </ModelWrapper>
          <img
            alt=""
            src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602182669/Tecsup/Services-removebg-preview.png"
          />
        </ImageContainer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"
          style={{
            width: '100%',
            height: '20vh',
            bottom: '-34px',
            zIndex: '100',
            position: 'absolute',
          }}>
          <polygon fill="#0E0E0F" points="0,100 100,0 100,100" />
        </svg>
      </StickyContainer>
    </Container>
  )
}


export default forwardRef(SecondSection);
