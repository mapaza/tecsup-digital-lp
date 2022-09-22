import styled from 'styled-components';
// import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding:  0 6vw;
  justify-content: center;


     

`;


export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    transition: height 0.3s ease;
  }

  & > div > p:first-child{
    font-size: 10.6vw;
    line-height: 10.9vw;

    @media only screen and (min-width : 992px) {
      font-size: 8vw; 
      line-height: 8.3vw;
    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      font-size: 6vw; 
      line-height: 6.3vw;
    }
  }

  & > div > p:nth-child(2){
    width: 100%;
  }


  /* Medium Devices, Desktops */
  @media only screen and (min-width : 992px) {
    width: 75%;

    & > .wrapper-text{
      height: 272px;
    }
  }

  @media only screen and (min-width : 1200px) {
    width: 65%;

    & > .wrapper-text{
      height: auto;
    }
  }
`;

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
    opacity: 0.5;
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
    background: black;
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
      width:20%;
    }
  
    /* Custom, iPhone Retina, Iphone SE*/ 
    @media only screen and (min-width : 320px) {
      width:20%;
    }
  
    /* Extra Small Devices, Phones, Surface Duo */ 
    @media only screen and (min-width : 480px) {
      width:20%;
    }
  
    /* Small Devices, Tablets, IPAD Air */
    @media only screen and (min-width : 768px) {
      width:17%;
    }
  
    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
      width:21%;
   }
  
    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      width:17%;
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

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
      font-size: 2.6vh;
      width: 20vh;
      bottom: -15vh;
   }
  
    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      font-size: 2.6vh;
      width: 20vh;
      bottom: -15vh;
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

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
      font-size: 2.6vh;
      width: 20vh;
      bottom: -18vh;
   }
  
    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      font-size: 2.6vh;
      width: 20vh;
      bottom: -18vh;
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
      font-size: 2.6vh;
      width: 20vh;
      bottom: -21vh;
   }
  
    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      font-size: 2.6vh;
      width: 20vh;
      bottom: -21vh;
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

    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
      font-size: 2.6vh;
      width: 20vh;
      bottom: -12vh;
   }
  
    /* Large Devices, Wide Screens */
    @media only screen and (min-width : 1200px) {
      font-size: 2.6vh;
      width: 20vh;
      bottom: -12vh;
    }
   
  }



 
`;