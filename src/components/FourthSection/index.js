import axios from 'axios';
import React, { forwardRef, useCallback, useMemo, useState } from 'react';

import { Container, Location, Campus, Form, SurveyButton } from './styles';

// import BackgroundVideo from '../BackgroundVideo';
// import { useLocation } from 'react-router-dom'
// import useSmoothScrolling from '../../hooks/useSmoothScrolling';


const initialContactProps = {
  contactForm: true,
  contactSend: false,
}



function parseUser(data) {
  return {
    NombreUsuario: data.nombres,
    ApellidoUsuario: data.apellidos,
    IdCiudad: data.ciudad,
    EmailUsuario: data.email,
    CompaniaUsuario: data.compania,
    IdDemo: '1',
    TelefonoUsuario: data.telefono,
  }
}

async function sendData(data) {
  const url = "/api/usuarios"
  await axios.post(url, data);
}


function Contact(props, ref) {

  const [survey, setSurvey] = useState(initialContactProps);

  const onSubmit = useCallback(async (data) => {
    try {
      const contactInfo = parseUser(data);
      sendData(contactInfo);


      setSurvey(s => ({ ...s, contactSend: true }))
      setSurvey(s => ({ ...s, contactForm: false }))
    } catch (err) {
      console.log(err);
    }

  }, [])

  const onEndSurvey = useCallback(async () => {
    setSurvey(initialContactProps)
  }, [])

  const renderContactForm = useMemo(() => {
    if (survey.contactForm) {
      return (
        <Form className="contact-form" textButton="Enviar" onSubmit={onSubmit} />
      )
    };
  }, [survey.contactForm, onSubmit]);

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
    <Container ref={ref}>
      {renderContactForm}
      {renderSuccessMessage}
      <Location>
        <div className="title">Contáctanos por Whatsapp</div>
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
            <span>Dirección: </span>
          Urb. Monterrey Lote D-8, José Luis Bustamante y Rivero
        </div>
          <div className="phone">
            <span>Telefono: </span>
          (54) 426610 anexos: 2308 – 2310
        </div>
        </Campus>
        <Campus>
          <div className="campus">Lima</div>
          <div className="address">
            <span>Dirección: </span>
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
            <span>Dirección: </span>
            Mz. A Sub lote 1 Urbanización Tecsup Víctor Larco Herrera, Trujillo
        </div>
          <div className="phone">
            <span>Telefono: </span>
          (044) 485420 anexos: 6000/6503/6506
        </div>
        </Campus>
      </Location> */}
    </Container>

  );
}

export default forwardRef(Contact);
