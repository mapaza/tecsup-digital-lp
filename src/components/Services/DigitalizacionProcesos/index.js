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
      <HeaderService
        title="Monitoreo de condiciones y visualización"
        subtitle=""
      />
       <Content style={{}}>
         
          <div className="line-60 right">
          </div>
          <div className="about-wrapper">
          <div className="about-image">
              <img
                alt=""
                src={imagenFooter}

              />
            </div>
            <div className="about">
              <div className="title">
                </div>
              <p>
              Acceder a la información de clientes industriales y mineros desde dispositivos de realidad mixta y smartphones. 
<br/>
<br/>
<p>Podrás Inspeccionar:</p>
            <ul>
              <li>
                Parámetros operativos con MR
              </li>
              
            </ul>
              </p>
              {/* <ShowMore to={{ pathname: "/contacto", search: "?q=demo&&plataforma=4" }}>
                Solicitar una demo
              </ShowMore> */}
            </div>
          </div>
        </Content>
    </Container>
  )
}

export default BigData;
