// const { default: styled } = require("styled-components");

import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  .description{
    margin: 0 0 5vh 0;
    

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





