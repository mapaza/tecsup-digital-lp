import React, { useCallback, useRef, useMemo, useState, useEffect } from 'react';
import { ContainerVP, WrapperVideo, Container } from './styles';
import BackgroundVideo from '../BackgroundVideo';
import { useLocation } from 'react-router-dom';
import useSmoothScrolling from '../../hooks/useSmoothScrolling';

import ContactForm from '../ContactForm'
import axios from 'axios';

function VideoPlayer() {

  const wrapperRef = useRef(null);
  useSmoothScrolling(wrapperRef);
  const videoRef = useRef();
  useEffect(() => {
      setTimeout(()=>{
          videoRef.current.play()
      },2000)
  }, []);

  return (
    <WrapperVideo ref={wrapperRef} >
    <BackgroundVideo src="https://res.cloudinary.com/dfxv7hzza/video/upload/v1602172671/Tecsup/bg-main.mp4" thumb="https://res.cloudinary.com/dfxv7hzza/image/upload/v1602116826/Tecsup/thumb-bg-main.png" />

    <Container>
    
    <video 
    ref={videoRef}
    id="my-video" 
    class="video-js" 
    controls 
    auto 
    poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg" 
    data-setup=''>
    <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type='video/mp4'/>
    </video>
    </Container>
  </WrapperVideo>
   
  );
}

export default VideoPlayer;
