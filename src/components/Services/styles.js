// import { motion } from 'framer-motion';
import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: relative;
  width: 100%;
  /* background: white; */
  min-height: 100vh;
`;


export const Detail = styled.div`
  width: 100%;
  position: relative;

  .left {
    color: white;
    min-height: 100vh;
    justify-content: center;
    display:flex;
    flex-direction: column;
    padding-bottom: 80px;
    @media only screen and (min-width : 992px) {
      padding-bottom: 0px;
    }
  }
  .img{
    height: 90vh;
    width: 44%;
    position: absolute;
    right: 0;
    top: 0;
    display: none;
    object-fit: cover;
    object-position: 24%;

    @media only screen and (min-width : 992px) {
      display: block;
    }

    
  }


  
`;



export const SubService = styled.div`

  padding:  0vw 6vw 5vw;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width : 992px) {
    width: 56%;
  }

  .number {
    font-size: 88px;
    font-weight: 700;
    line-height: 98px;
    -webkit-text-stroke: 1px #fff; 
    -webkit-text-fill-color: transparent;

    /* Galaxy Fold */ 
    @media only screen and (min-width : 280px) {
      font-size: 2vh;
      line-height: 3vh;
    }
  
    /* Custom, iPhone Retina, Iphone SE*/ 
    @media only screen and (min-width : 320px) {
      font-size: 3vh;
      line-height: 4vh;
    }
  
    /* Extra Small Devices, Phones, Surface Duo */ 
    @media only screen and (min-width : 480px) {
      font-size: 3vh;
      line-height: 4vh;
    }
  
    /* Small Devices, Tablets, IPAD Air */
    @media only screen and (min-width : 768px) {
      font-size: 2vh;
      line-height: 3vh;
    }
  
    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
      font-size: 3vh;
      line-height: 4vh;
   }
  
    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      font-size: 3vh;
      line-height: 4vh;
    }

  }

  .title {
    user-select: none;
    color: white;
    font-size: 32px;
    line-height: 38px;
    font-weight: 700;
    margin-bottom:3vh;

    /* Galaxy Fold */ 
    @media only screen and (min-width : 280px) {
      font-size: 2vh;
      line-height: 3vh;
    }
  
    /* Custom, iPhone Retina, Iphone SE*/ 
    @media only screen and (min-width : 320px) {
      font-size: 3vh;
      line-height: 4vh;
    }
  
    /* Extra Small Devices, Phones, Surface Duo */ 
    @media only screen and (min-width : 480px) {
      font-size: 3vh;
      line-height: 4vh;
    }
  
    /* Small Devices, Tablets, IPAD Air */
    @media only screen and (min-width : 768px) {
      font-size: 2vh;
      line-height: 3vh;
    }
  
    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
      font-size: 3vh;
      line-height: 4vh;
   }
  
    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      font-size: 3vh;
      line-height: 4vh;
    }

   
  }

  p{
    color: white;
    user-select: none;
    font-size: 100%;
    line-height: 130%;
    font-weight: 300;

    /* Galaxy Fold */ 
    @media only screen and (min-width : 280px) {
      font-size: 2vh;
      line-height: 3vh;
    }
  
    /* Custom, iPhone Retina, Iphone SE*/ 
    @media only screen and (min-width : 320px) {
      font-size: 3vh;
      line-height: 4vh;
    }
  
    /* Extra Small Devices, Phones, Surface Duo */ 
    @media only screen and (min-width : 480px) {
      font-size: 3vh;
      line-height: 4vh;
    }
  
    /* Small Devices, Tablets, IPAD Air */
    @media only screen and (min-width : 768px) {
      font-size: 2vh;
      line-height: 3vh;
    }
  
    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
      font-size: 3vh;
      line-height: 4vh;
   }
  
    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      font-size: 3vh;
      line-height: 4vh;
    }
  }
  ul{
    font-size: 3vh;
    line-height: 4vh;
    /* Galaxy Fold */ 
    @media only screen and (min-width : 280px) {
      font-size: 2vh;
      line-height: 3vh;
    }
  
    /* Custom, iPhone Retina, Iphone SE*/ 
    @media only screen and (min-width : 320px) {
      font-size: 3vh;
      line-height: 4vh;
    }
  
    /* Extra Small Devices, Phones, Surface Duo */ 
    @media only screen and (min-width : 480px) {
      font-size: 3vh;
      line-height: 4vh;
    }
  
    /* Small Devices, Tablets, IPAD Air */
    @media only screen and (min-width : 768px) {
      font-size: 2vh;
      line-height: 3vh;
    }
  
    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
      font-size: 3vh;
      line-height: 4vh;
   }
  
    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      font-size: 3vh;
      line-height: 4vh;
    }
  }
 
 
`;

export const Subtitle = styled(motion.p)`
  width: 90%; 
  font-weight: 300; 
  color: white; 
  margin-top: 1vw;
  font-size: 100%; 
  line-height: 130%;

  /* Galaxy Fold */ 
    @media only screen and (min-width : 280px) {
      font-size: 2vh;
      line-height: 3vh;
    }
  
    /* Custom, iPhone Retina, Iphone SE*/ 
    @media only screen and (min-width : 320px) {
      font-size: 3vh;
      line-height: 4vh;
    }
  
    /* Extra Small Devices, Phones, Surface Duo */ 
    @media only screen and (min-width : 480px) {
      font-size: 3vh;
      line-height: 4vh;
    }
  
    /* Small Devices, Tablets, IPAD Air */
    @media only screen and (min-width : 768px) {
      font-size: 2vh;
      line-height: 3vh;
    }


   /* Medium Devices, Desktops */
   @media only screen and (min-width : 992px) {
    font-size: 4vh; 
    line-height: 5vh;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width : 1200px) {
    font-size: 3.2vh; 
    line-height: 4.2vh;
  }

`
