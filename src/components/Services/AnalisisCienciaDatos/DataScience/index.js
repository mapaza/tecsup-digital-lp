import React, { useRef } from 'react';

import { Title, Subtitle } from '../../../FirstSection/styles'
import BackgroundVideo from '../../../BackgroundVideo_2';

import { Container, Content, Body } from './styles';
import ShowMore from '../../ShowMore'

import useSmoothScrolling from '../../../../hooks/useSmoothScrolling';

import imagenCabecera from '../../../../assets/images/datascience_cabecera.jpg'
// import imagenFooter from '../../../../assets/images/datascience_footer.jpg'
import Video1 from '../../../../assets/videos/Tl_v3_min.mp4';

function DataScience() {
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
      <BackgroundVideo src={Video1} />
      {/* </ImgContainer> */}
      <Body>
        <Content style={{}}>
          <div className="main-service">
            Analítica y ciencia de datos
          </div>
          <Title className="title">
            <span>
              Data Science
            </span>
          </Title>
          <Subtitle>
            Cooperamos con empresas de todos los tamaños, desde las startups hasta las grandes empresas. Nuestra experiencia nos dice que, independientemente del tamaño de la empresa, los propietarios de negocios se enfrentan a retos similares cuando planifican nuevas iniciativas para la gestión inteligente de sus datos.
          </Subtitle>
          <div className="separator"></div>
          <div className="line-40"></div>
          <div className="features-wrapper">
            <div className="features">
              <div className="feature">
                <div className="title">Modelos de cooperación flexible</div>
                <div className="description">Ofrecemos condiciones de cooperación flexibles que son las que mejor se adaptan a las necesidades de su empresa.</div>
              </div>
              <div className="feature">
                <div className="title">Enfoque innovador</div>
                <div className="description">El uso de las últimas herramientas y tecnologías con enfoques innovadores.</div>
              </div>
              {/* <div className="feature">
                <div className="title">Amplia experiencia</div>
                <div className="description">Amplia experiencia y profundos conocimientos de dominio en el desarrollo del  IA y ML.</div>
              </div> */}
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
          <div className="about-wrapper">
            <div className="about-image">
              <img
                alt=""
                src={imagenCabecera}
              />

              />
            </div>
            <div className="about">
              <div className="title">
                ¿Qué lograrás con Data Science?
              </div>
              <p>
                - Revisando sus capacidades actuales y definiendo los objetivos futuros para hacer recomendaciones sobre herramientas, tecnología y arquitectura.
                <br />
                - Mejora de los modelos construidos anteriormente para elevar continuamente la calidad de las percepciones y mantenerse al día con el entorno cambiante.
                <br />
                - Probando un sistema a pequeña escala, y demostrando la viabilidad de los modelos ML para su problema.
              </p>
              <ShowMore to={{ pathname: "/contacto", search: "?q=demo&&plataforma=5" }}>
                Solicitar una demo
                </ShowMore>
            </div>
          </div>
        </Content>
      </Body>

    </Container>
  );
}

export default DataScience;
