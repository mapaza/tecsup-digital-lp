
// import React, { useContext, useRef, useEffect, useState, useCallback } from 'react'
import React, { useRef } from 'react'
import { useProgress } from '@react-three/drei'
import { MdChevronRight } from 'react-icons/md'
import { useTransform, useViewportScroll } from 'framer-motion'
// import SectionsContext from '../SectionsWrapper/SectionsContext'

// import transform from '../../utils/transform'
import { Title, Subtitle, OverlayBody, StickyContainer, Container, ScrollDown, Model, VideoH } from './styles'
// import useWrapperScroll from '../SectionsWrapper/useWrapperScroll'
import ButtonCircle from '../ButtonCircle'
import { useCallback } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'


// const bounceTransition = {
//   y: {
//     duration: 0.4,
//     yoyo: Infinity,
//     ease: "easeOut",
//   },
//   opacity: {
//     ease: "easeOut",
//     duration: 1,
//     delay: 2,
//   }
// }

// const maxScale = 0.25;
const minScale = 0.8;

// const maxRotationY = -0.20;
const minRotationY = -1.90;

// const maxRotationX = 0.50;
const minRotationX = 0;

// const maxPositionY = -0.80;
const minPositionY = -1;

const initialMeshValues = {
  rotation: [minRotationX, minRotationY, 0],
  scale: [minScale, minScale, minScale],
  position: [0, minPositionY, 0],
}


function FirstSection() {

  // const { wrapperRef } = useContext(SectionsContext)
  const meshRef = useRef(null);
  // const [widthModel, setWidthModel] = useState(50)

  // const [enabledZoomIn, setEnabledZoomIn] = useState(true);
  // const [enabledOrbitControls, setEnabledOrbitControls] = useState(false);



  // useEffect(() => {
  //   const timeoutID = setTimeout(() => {
  //     setEnabledZoomIn(false);
  //     setEnabledOrbitControls(true);
  //   }, 2500);
  //   return () => clearTimeout(timeoutID);

  // }, [])

  // const onUpdateScrollValue = useCallback((scrollY, scrollYProgress) => {

  //   // // console.log(scrollYProgress);

  //   if (scrollY > 800) {
  //     setEnabledZoomIn(false);
  //     setEnabledOrbitControls(true);
  //     return
  //   } else if (scrollY < 400) {
  //     setEnabledOrbitControls(false);
  //   }
  //   // console.log(transform(scrollYProgress, [50, 100], [0.05, 0.199]))
  //   meshRef.current.rotation.y = transform(scrollYProgress, [minRotationY, maxRotationY], [0, 0.199]);
  //   meshRef.current.rotation.x = transform(scrollYProgress, [minRotationX, maxRotationX], [0, 0.199]);
  //   meshRef.current.position.y = transform(scrollYProgress, [minPositionY, maxPositionY], [0, 0.199]);
  //   meshRef.current.scale.x = transform(scrollYProgress, [minScale, maxScale], [0.0, 0.199]);
  //   meshRef.current.scale.y = transform(scrollYProgress, [minScale, maxScale], [0.0, 0.199]);
  //   meshRef.current.scale.z = transform(scrollYProgress, [minScale, maxScale], [0.0, 0.199]);
  // }, [])

  // const { scrollYProgress } = useWrapperScroll(onUpdateScrollValue)

  const { scrollYProgress } = useViewportScroll()

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0])

  const { progress } = useProgress()

  /* const canAnimate = progress === 100 */
  const canAnimate = true
 

  const history = useHistory()
  const location = useLocation()

  const handleClick = useCallback((e, path) => {
    // console.log(location);
    if (location.pathname !== "/") {
      history.push(`/`);
    } else {
      const el = document.querySelector(path);
      window.scrollTo(0, el.offsetTop);
    }

  }, [history, location])

  return (
    <Container id="first">
      <StickyContainer>
        <OverlayBody>
          <Title
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: canAnimate ? 1 : 0,
              y: canAnimate ? 0 : 100,

            }}
            transition={{
              ease: "easeOut",
              delay: 1
            }}
          >
          Potencia el aprendizaje virtual de tu empresa. <br/>
          Bienvenido a la era Digital.

          </Title>
          <Subtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: canAnimate ? 1 : 0 }}
            transition={{
              ease: "easeOut",
              delay: 1.3
            }}>
           Difer??nciate del resto transformando tu informaci??n en soluciones. 
           
           Analiza y destaca.
          </Subtitle>
          <div className="button-circle-container" onClick={(e) => handleClick(e, '#second')}>
          
              {/* <ButtonCircle canAnimate={canAnimate} >
                COMENZAR AHORA
              </ButtonCircle> */}
            
           <Link to="/video">
              <ButtonCircle canAnimate={canAnimate} >
                COMENZAR AHORA
              </ButtonCircle>
            </Link>
          </div>
        </OverlayBody>
        {/* <div style={{ width: `${widthModel}%`, height: '100vh', transition: '0.1s width' }}> */}
{/* 
        <Model
          ref={meshRef}
          pathModel={modelHidrociclon}
          meshProps={initialMeshValues}
          enabledZoomIn={true}
          enabledOrbitControls={false}
        />

 */}
 <VideoH/>
 
        <ScrollDown
          style={{ opacity: canAnimate ? opacity : 0 }}
          transition={{
            ease: "easeOut",
            duration: 1, delay: 1.5
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{
            opacity: canAnimate ? 1 : 0,
            y: canAnimate ? 0 : 100
          }}
        >
          <p>Scroll Down</p>
          <MdChevronRight />
        </ScrollDown>
        <svg className="triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" >
          <polygon fill="white" points="0,100 100,0 100,100" />
        </svg>
      </StickyContainer>

    </Container>
  )
}


export default FirstSection;
