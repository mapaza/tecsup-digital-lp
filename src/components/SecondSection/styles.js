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

  /* Extra Small Devices, Phones, Surface Duo */ 
  @media only screen and (min-width : 480px) {
    font-size: 6.5vh; 
    line-height: 8.3vw;
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


  /* Galaxy Fold */ 
  @media only screen and (min-width : 280px) {
    font-size: 3vh; 
    line-height: 4vh;
  }

  /* Custom, iPhone Retina, Iphone SE*/ 
  @media only screen and (min-width : 320px) {
    font-size: 3vh; 
    line-height: 4vh;
  }

  /* Extra Small Devices, Phones, Surface Duo */ 
  @media only screen and (min-width : 480px) {
    font-size: 4vh; 
    line-height: 5vh;
  }

  /* Small Devices, Tablets, IPAD Air */
  @media only screen and (min-width : 768px) {
    font-size: 3vh; 
    line-height: 4vh;
  }

   /* Medium Devices, Desktops */
   @media only screen and (min-width : 992px) {
    font-size: 120%; 
    line-height: 150%;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    font-size: 2.8vh; 
    line-height: 4vh;
  }
`


export const OverlayBody = styled.div`
  position: absolute;
  width: 100%;
    top: 35%;
  padding-left: 5vw;
  z-index: 15;
  user-select: none;

  @media only screen and (min-width : 1200px) {
    width: 65%;
  }

  .button-circle-container{
    width: 140px;
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
  
  left: 0px;
  z-index: 20;
  position: absolute;

  height: 44%;
  display: block;
  top: 10%;
  width: 100vw;

/* Galaxy Fold */ 
  @media only screen and (min-width : 280px) {
    height: 44%;
    left: 4%;
    display: block;
    top: 1%;
    width: 90%;
  }

  /* Custom, iPhone Retina, Iphone SE*/ 
  @media only screen and (min-width : 320px) {
    height: 44%;
    left: 11%;
    display: block;
    top: -1%;
    width: 75%;
  }

  /* Extra Small Devices, Phones, Surface Duo */ 
  @media only screen and (min-width : 480px) {
    height: 44%;
    left: 11%;
    display: block;
    top:-1%;
    width: 75%;
  }

  /* Small Devices, Tablets, IPAD Air */
  @media only screen and (min-width : 768px) {
    height: 44%;
    left: 11%;
    display: block;
    top: 1%;
    width: 95%;
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width : 992px) {
   height: 44%;
    left: -5vw;
    display: block;
    top: 4%;
    width: 75%;
 }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    height: 44%;
    left: -5vw;
    display: block;
    top: 5%;
    width: 75%;
  }
`

export const IconsLayer = styled.div`
  display: flex;
  margin-top: 12px;

  .circle{
    margin: 0;
    border: 1px solid white;
    border-radius: 50%;
    // width: 70px;
    // height: 70px;
    width: 12vh;
    height:12vh;
    margin-right:2.5vh;
    cursor: pointer;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 5s opacity;
    background:#03BAED;
    -webkit-transition: all 0.3s ease; /* For Safari 3.0 to 6.0 */
        transition: all 0.3s ease; /* For modern browsers */
  
        /* Galaxy Fold */ 
        @media only screen and (min-width : 280px) {
          width: 7vh;
          height:7vh;
          margin-right:2.5vh;
        }
      
        /* Custom, iPhone Retina, Iphone SE*/ 
        @media only screen and (min-width : 320px) {
          width: 8vh;
          height:8vh;
          margin-right:2.5vh;
        }
      
        /* Extra Small Devices, Phones, Surface Duo */ 
        @media only screen and (min-width : 480px) {
          width: 10vh;
          height:10vh;
          margin-right:2.5vh;
        }
      
        /* Small Devices, Tablets, IPAD Air */
        @media only screen and (min-width : 768px) {
          width: 8vh;
          height:8vh;
          margin-right:2.5vh;
        }
      
        /* Medium Devices, Desktops */
        @media only screen and (min-width : 992px) {
          width: 10vh;
          height:10vh;
          margin-right:2.5vh;
       }
      
        /* Large Devices, Wide Screens */
        @media only screen and (min-width : 1200px) {
          width: 10vh;
          height:10vh;
          margin-right:2.5vh;
        }
  
      }

  .active {
    opacity: 1;
    cursor: default;
  }
  a + a{
    margin-left: 10px;
  }
  svg {
    fill: black;
    width: 36px;
    height: 36px;
    stroke: black;
    stroke-width: 1;
    stroke-linejoin: round;
    stroke-linecap: round;
    -webkit-transition: all 0.3s ease; /* For Safari 3.0 to 6.0 */
        transition: all 0.3s ease; /* For modern browsers */

        /* Galaxy Fold */ 
        @media only screen and (min-width : 280px) {
          width:3vh;
        }
      
        /* Custom, iPhone Retina, Iphone SE*/ 
        @media only screen and (min-width : 320px) {
          width:4vh;
        }
      
        /* Extra Small Devices, Phones, Surface Duo */ 
        @media only screen and (min-width : 480px) {
          width:6vh;
        }
      
        /* Small Devices, Tablets, IPAD Air */
        @media only screen and (min-width : 768px) {
          width:6vh;
        }
      
        /* Medium Devices, Desktops */
        @media only screen and (min-width : 992px) {
          width:6vh;
       }
      
        /* Large Devices, Wide Screens */
        @media only screen and (min-width : 1200px) {
          width:6vh;
        }
  }
  .svg:hover{
    stroke:black;
  }
  
  .circle:hover{
    background:black;
    opacity: 1;

  }
  
  .servicio-titulo{
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: black;
    font-size: 2.2vh;
    padding: 2vh 0vh;
    text-align: center;
    font-weight: bolder;
  }
  a{
    text-align: -webkit-center;
    width:14%;

    /* Galaxy Fold */ 
    @media only screen and (min-width : 280px) {
      width:14%;
    }
  
    /* Custom, iPhone Retina, Iphone SE*/ 
    @media only screen and (min-width : 320px) {
      width:14%;
    }
  
    /* Extra Small Devices, Phones, Surface Duo */ 
    @media only screen and (min-width : 480px) {
      width:14%;
    }
  
    /* Small Devices, Tablets, IPAD Air */
    @media only screen and (min-width : 768px) {
      width:14%;
    }
  
    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
      width:14%;
   }
  
    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      width:14%;
    }
  }

  .tags {
    display: inline;
    position: relative;
  }
  
  .tags:hover:after {
    background: #333;
    background: rgba(0,0,0,.8);
    border-radius: 5px;
    bottom: -13vh;
    color: #fff;
    content: attr(gloss);
    left: -71%;
    padding: 5px 15px;
    position: absolute;
    z-index: 98;
    width: 20vh;
    font-size: 2.6vh;
    font-weight: 600;

    
    /* Galaxy Fold */ 
    @media only screen and (min-width : 280px) {
      font-size: 1.6vh;
      width: 10vh;
    }
  
    /* Custom, iPhone Retina, Iphone SE*/ 
    @media only screen and (min-width : 320px) {
      font-size: 1.6vh;
      width: 10vh;
    }
  
    /* Extra Small Devices, Phones, Surface Duo */ 
    @media only screen and (min-width : 480px) {
      font-size: 1.6vh;
      width: 10vh;
    }
  
    /* Small Devices, Tablets, IPAD Air */
    @media only screen and (min-width : 768px) {
      font-size: 1.6vh;
      width: 10vh;
    }
  
  
  }
  
  .tags:hover:before {
    border: solid;
    border-color: #333333bf transparent;
    border-width: 0px 15px 15px 15px;
    bottom: -23px;
    content: "";
    left: -26%;
    position: absolute;
    z-index: 99;

     
    /* Galaxy Fold */ 
    @media only screen and (min-width : 280px) {
      bottom: -5vh;
    }
  
    /* Custom, iPhone Retina, Iphone SE*/ 
    @media only screen and (min-width : 320px) {
      bottom: -5vh;
    }
  
    /* Extra Small Devices, Phones, Surface Duo */ 
    @media only screen and (min-width : 480px) {
      bottom: -5vh;
    }
  
    /* Small Devices, Tablets, IPAD Air */
    @media only screen and (min-width : 768px) {
      bottom: -5vh;
    }
  


  }

  .servicio2:hover:after {
    background: #333;
    background: rgba(0,0,0,.8);
    border-radius: 5px;
    bottom: -16vh;
    color: #fff;
    content: attr(gloss);
    left: -71%;
    padding: 5px 15px;
    position: absolute;
    z-index: 98;
    width: 20vh;
    font-size: 2.6vh;
    font-weight: 600;
    /* Galaxy Fold */ 
    @media only screen and (min-width : 280px) {
      font-size: 1.6vh;
      width: 10vh;
    }
  
    /* Custom, iPhone Retina, Iphone SE*/ 
    @media only screen and (min-width : 320px) {
      font-size: 1.6vh;
      width: 10vh;
      bottom: -15vh;
    }
  
    /* Extra Small Devices, Phones, Surface Duo */ 
    @media only screen and (min-width : 480px) {
      font-size: 1.6vh;
      width: 10vh;
    }
  
    /* Small Devices, Tablets, IPAD Air */
    @media only screen and (min-width : 768px) {
      font-size: 1.6vh;
      width: 10vh;
    }
  
  
    
  }

  .servicio3:hover:after {
    background: #333;
    background: rgba(0,0,0,.8);
    border-radius: 5px;
    bottom: -19vh;
    color: #fff;
    content: attr(gloss);
    left: -71%;
    padding: 5px 15px;
    position: absolute;
    z-index: 98;
    width: 20vh;
    font-size: 2.6vh;
    font-weight: 600;
    /* Galaxy Fold */ 
    @media only screen and (min-width : 280px) {
      font-size: 1.6vh;
      width: 10vh;
      bottom: -18vh;
    }
  
    /* Custom, iPhone Retina, Iphone SE*/ 
    @media only screen and (min-width : 320px) {
      font-size: 1.6vh;
      width: 10vh;
    }
  
    /* Extra Small Devices, Phones, Surface Duo */ 
    @media only screen and (min-width : 480px) {
      font-size: 1.6vh;
      width: 10vh;
    }
  
    /* Small Devices, Tablets, IPAD Air */
    @media only screen and (min-width : 768px) {
      font-size: 1.6vh;
      width: 10vh;
      bottom: -19vh;
     
    }

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
      font-size: 1.6vh;
      width: 10vh;
      bottom: -19vh;
   }
  
    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      font-size: 1.6vh;
      width: 20vh;
      bottom: -12vh;
    }
  
   
  }

  .servicio4:hover:after {
    background: #333;
    background: rgba(0,0,0,.8);
    border-radius: 5px;
    bottom: -10vh;
    color: #fff;
    content: attr(gloss);
    left: -71%;
    padding: 5px 15px;
    position: absolute;
    z-index: 98;
    width: 20vh;
    font-size: 2.6vh;
    font-weight: 600;


    /* Galaxy Fold */ 
    @media only screen and (min-width : 280px) {
      font-size: 1.6vh;
      width: 10vh;
    }
  
    /* Custom, iPhone Retina, Iphone SE*/ 
    @media only screen and (min-width : 320px) {
      font-size: 1.6vh;
      width: 10vh;
    }
  
    /* Extra Small Devices, Phones, Surface Duo */ 
    @media only screen and (min-width : 480px) {
      font-size: 1.6vh;
      width: 10vh;
    }
  
    /* Small Devices, Tablets, IPAD Air */
    @media only screen and (min-width : 768px) {
      font-size: 1.6vh;
      width: 10vh;
    }
  
   
  }



 
`;

