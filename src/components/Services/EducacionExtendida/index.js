import React, { useRef } from 'react'
import useSmoothScrolling from '../../../hooks/useSmoothScrolling';
import HeaderService from '../HeaderService';
// import { Route, useLocation } from 'react-router-dom'
import { Container, Content } from './styles'
import ShowMore from '../ShowMore';
import { Detail, SubService } from '../styles'
import imagenFooter from './../../../assets/images/laboratorios_web.jpeg';


const BigData = () => {
  const wrapperRef = useRef(null);

  useSmoothScrolling(wrapperRef);

  return (
    <Container ref={wrapperRef}>
      {/* <ImgContainer> */}
      {/* <div className="overlay"></div> */}
      {/* <img alt="data science"

        // src="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602194847/Tecsup/pgc4.png"
        src={imagenCabecera}
        /> */}
      
      {/* </ImgContainer> */}
      <HeaderService
        title="Educación extendida"
        subtitle=""
      />
        <Content style={{}}>
          
          <div className="separator"></div>
         

          <div className="line-40"></div>
          <div className="about">
              
              <p>
              Lleva a tu organización a un mundo virtual totalmente inmersivo, colaborativo y asíncrono que replica la infraestructura real de acuerdo a lo que desees.
              </p>
              <p>Podrás desarrollar:</p>
             
            </div>
          <div className="features-wrapper">
            <div className="features">
              
              <div className="feature">
                <div className="title">Aprendizaje basado en Metaverso</div>
                <div className="description"> Accede a través de dispositivos especiales (gafas RV y RA)e interactúa con otros usuarios.  Vive la virtualidad de forma inmersiva y multisensorial, al que se accede principalmente con los headsets de realidad virtual.
                </div>
              </div>
             
            </div>
            <div className="circle-wrapper">
              <div className="circle">
                <div className="circle-inner">
                </div>
              </div>
            </div>
          </div>

          <div className="separator"></div>
          <div className="separator"></div>
          <div className="line-60 right">
          </div>
         
        </Content>
     
    </Container>
  )
}

export default BigData;
