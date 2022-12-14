import React, { useCallback, useRef, useMemo, useState } from 'react';
import { Container, Location, Campus, WrapperVideo, SurveyButton } from './styles';
import BackgroundVideo from '../BackgroundVideo';
import { useLocation } from 'react-router-dom';
import useSmoothScrolling from '../../hooks/useSmoothScrolling';

import ContactForm from '../ContactForm'
import axios from 'axios';

const initialContactProps = {
  contactForm: true,
  contactSend: false,
}

function parseUser(data, idDemo) {
  return {
    NombreUsuario: data.nombres,
    ApellidoUsuario: data.apellidos,
    IdCiudad: data.ciudad,
    EmailUsuario: data.email,
    CompaniaUsuario: data.compania,
    IdDemo: idDemo ? idDemo : "1",
    TelefonoUsuario: data.telefono,
    IdUsuario: 0,
  }
}

async function sendDataDemo(data) {
  const url = "/api/usuarios/solicitudDemo"
  // console.log(data)
  await axios.post(url, data);
}


async function sendData(data) {
  const url = "/api/usuarios"
  await axios.post(url, data);
}


function Contact() {

  const [survey, setSurvey] = useState(initialContactProps);

  const wrapperRef = useRef(null);
  const location = useLocation();

  const q = new URLSearchParams(location.search).get('q')
  const plataforma = new URLSearchParams(location.search).get('plataforma')

  const onSubmit = useCallback(async (data) => {
    // console.log(data);
    try {


      if (q) {
        const contactInfo = parseUser(data, plataforma);
        sendDataDemo(contactInfo)
        // console.log(contactInfo);
      } else {
        const contactInfo = parseUser(data);
        sendData(contactInfo)
        // console.log(contactInfo);
      }

      setSurvey(s => ({ ...s, contactSend: true }))
      setSurvey(s => ({ ...s, contactForm: false }))
    } catch (err) {
      console.log(err);
    }

  }, [plataforma, q]);

  // const onClick = useCallback(async (data) => {
  //   console.log(data);
  // })

  useSmoothScrolling(wrapperRef);

  const onEndSurvey = useCallback(async () => {
    setSurvey(initialContactProps)
  }, [])

  const renderContactForm = useMemo(() => {
    if (survey.contactForm) {
      return (
        <>
          <ContactForm className="contact-form" textButton={q ? "Solicitar Demostraci??n" : "Enviar"} onSubmit={onSubmit} />
          <Location>
        <div className="title">Cont??ctanos por Whatsapp</div>
       <img  width="30%" src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAABlBMVEUAAAD///+l2Z/dAAABi0lEQVRoge3aMZKDMAyF4Z9xQckROApHw0fjKBzBJQXD20KCkMxmssWaZXakBgJfp4ksW6CfRCFYsGA7W/BIsh/diqRtf0ywOzFL3Jzsmkmi18YgyV4Hu4JNwDgnMSyNcreiud0YCtAHu5xBIxWAYPdn7cZYkj7lNFgFttc3K2lHst6VwWA1mMdrfdsj2H3YKYCDnZ8Hq868vnl73CgDOtrjPtglTJJKo9xL5m2TIk2dZFkLdhdmqw2QZGnsVsDr2zifd5TBqjEJOin38sZMq689nfRoCYJVZx7+/0mS1bfkxS7YXdiC98sr0OrREkzdyniqb8GqMklSBhiWRipJ9Evj+8yXA8lg9VgB+hVNT8nyg+Jgt2LWgvlRWAY0g9W3Xgp2ATsFtOebAqOCXcLO86zJu2I/kHxZ64PdgFke7dxyszTO3+Q0WF02cYy97M2RvqdkBbuG0doI2JrmYjjYfZls4CJJK++mY8F+n+31TRONfTUBvpdRsIuYhw8f88cPjYL9GftBBAv2/9kX5WYhr0zKcMsAAAAASUVORK5CYII="/>
       
       <Campus>
          <div className="campus"><strong>Andy Barreda</strong></div>
         
          <div className="phone">
            <span>Telefono: </span>
            +51 993 012 451
        </div>
        </Campus>
      </Location>
          {/* <Location>
            <div className="title">Sedes</div>

            <Campus>
              <div className="campus">Arequipa</div>
              <div className="address">
                <span>Direcci??n: </span>
                Urb. Monterrey Lote D-8, Jos?? Luis Bustamante y Rivero
              </div>
              <div className="phone">
                <span>Telefono: </span>
                (54) 426610 anexos: 2308 ??? 2310
              </div>
            </Campus>

            <Campus>
              <div className="campus">Lima</div>
              <div className="address">
                <span>Direcci??n: </span>
                  Av. Cascanueces 2221 Sta. Anita. Lima
              </div>
              <div className="phone">
                <span>Telefono: </span>
                  317-3900
              </div>
            </Campus>
            <Campus>
              <div className="campus">Trujillo</div>
              <div className="address">
                <span>Direcci??n: </span>
                  Mz. A Sub lote 1 Urbanizaci??n Tecsup V??ctor Larco Herrera, Trujillo
              </div>
              <div className="phone">
                <span>Telefono: </span>
                  (044) 485420 anexos: 6000/6503/6506
              </div>
            </Campus>
          </Location> */}

        </>
      )
    };
  }, [survey.contactForm, q, onSubmit]);

  const renderSuccessMessage = useMemo(() => {
    if (survey.contactSend) {
      return (
        <div className="cuerpo">
          <div className="titulo">Gracias por comunicarte con nosostros</div>
          <div className="descripcion">Nos estaremos comunicando lo mas breve posible</div>
          <SurveyButton onClick={onEndSurvey}>
            Ok
          </SurveyButton>
        </div>
      )
    }
  }, [survey.contactSend, onEndSurvey])

  return (
    <WrapperVideo ref={wrapperRef} >
      <BackgroundVideo src="https://res.cloudinary.com/dfxv7hzza/video/upload/v1602172671/Tecsup/bg-main.mp4" thumb="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602116826/Tecsup/thumb-bg-main.png" />

      <Container>
        {/* <SweetAlert open={open} onClose={onCloseModal}>
          {message}
        </SweetAlert> */}
        {renderContactForm}
        {renderSuccessMessage}

      </Container>
    </WrapperVideo>
  );
}

export default Contact;
