import React, { useCallback, useRef, useMemo, useState } from 'react';
import { Container, Location, Campus, WrapperVideo, SurveyButton } from './styles';
import BackgroundVideo from '../BackgroundVideo';
import { useLocation } from 'react-router-dom';
import useSmoothScrolling from '../../hooks/useSmoothScrolling';

import ContactForm from '../ContactForm'
import axios from 'axios';

function NotFound() {

  const wrapperRef = useRef(null);
  useSmoothScrolling(wrapperRef);

  return (
    <WrapperVideo ref={wrapperRef} >
      <BackgroundVideo src="https://res.cloudinary.com/dfxv7hzza/video/upload/v1602172671/Tecsup/bg-main.mp4" thumb="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602116826/Tecsup/thumb-bg-main.png" />

      <Container> 
        <p className='titulo'>404 - No encontrado</p>
        
      </Container>
    </WrapperVideo>
  );
}

export default NotFound;
