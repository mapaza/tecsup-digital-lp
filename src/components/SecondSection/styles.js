import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Title = styled(motion.p)`
  font-size: 77px; 
  font-weight: 700; 
  font-size: 10vw; 
  line-height: 10.3vw;
  .outline{
    /* -webkit-text-stroke: 1px #fff; */
    /* -webkit-text-fill-color: transparent; */
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width : 992px) {
    font-size: 8vw; 
    line-height: 8.3vw;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    font-size: 6vw; 
    line-height: 6.3vw;
  }
  
`

export const Subtitle = styled(motion.p)`
  width: 90%; 
  font-weight: 300; 
  margin-top: 1vw;
  font-size: 100%; 
  line-height: 130%;


   /* Medium Devices, Desktops */
   @media only screen and (min-width : 992px) {
    font-size: 120%; 
    line-height: 150%;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    font-size: 18px; 
    line-height: 24px;
  }
`


export const OverlayBody = styled.div`
  position: absolute;
  width: 100%;
    top: 50%;
  padding-left: 5vw;
  z-index: 15;
  user-select: none;

  @media only screen and (min-width : 1200px) {
    width: 65%;
  }
`

export const StickyContainer = styled.div`
  width: 100%; 
  height: 100vh; 
  /* position: sticky;  */
  /* top: 0;  */
  display: flex; 
  /* overflow:hidden; */
  align-items: center;
`


export const Container = styled.div`
  height: 120vh;
  /* scroll-snap-align: start; */
  position: relative;
  background: white;
`

export const ImageContainer = styled.div`
  height: calc(110vh - 80px);
  width: 100%;
  top: 80px;
  overflow: hidden;
  /* top : -10vh; */
  right: 0;
  z-index: 10;
  position: absolute;
  img {
    height: 100%;
    float: right;
    position: relative;
    display: none;
    /* width: 100%; */
    /* object-fit: cover; */
    /* object-position: 6% 0; */

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 1200px) {
      display: block;
    }
  }



`

export const ModelWrapper = styled.div`
  overflow: hidden;
  /* top : -5vh; */
  
  
  z-index: 20;
  position: absolute;

  height: 55%;
  display: block;
  top: 20%;
  width: 100vw;


  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    height: 55%;
    left: 0vw;
    display: block;
    top: 10%;
    width: 60%;
  }
`


