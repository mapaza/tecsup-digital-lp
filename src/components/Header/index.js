import React from 'react'

import { Container, Nav, Contact } from './styles'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useCallback } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'



function Header() {


  const history = useHistory()
  const location = useLocation()

  const handleClick = useCallback((e, path) => {
    // console.log(location);
    if (location.pathname !== "/") {
      history.push(`/`);
    } else {
      const el = document.querySelector(path);
      window.scrollTo(0, el.offsetTop);
    }

  }, [history, location])




  useEffect(history.listen((location) => {
    if (location.pathname !== '/') {

      const navbar = document.querySelector("#navbar");
      const circle = document.querySelector("#navbar .circle");
      const contact = document.querySelector("#navbar .contact");
      const img = document.querySelector("#navbar img");
      navbar.style.color = "white";
      circle.style.background = "white"
      contact.style.color = "white"
      circle.style.color = "black"
      img.style.filter = "invert(0%)"
    }
  }), [])

  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <Container id="navbar">
        <Nav>
          <div>
            <img alt="Logo Tecsup" src="https://4.bp.blogspot.com/-6N-Ug1BVq_4/WbLU5EQ7osI/AAAAAAAAAqw/xOnXqTDsJmst4uff7-dsuVKFd5fPzjB9wCK4BGAYYCw/s1600/Logo%2Bpositivo_fondotransparente.png" />
            <span className="separator">
              |
            </span>
          </div>
          <div className="item home" onClick={(e) => handleClick(e, '#first')}>
            Inicio
          </div>

          {/* {location.pathname.includes("/services/") && (

              <div className="item" onClick={() => history.goBack()}>
                Retornar
              </div>

            )} */}
          {location.pathname === "/" && (
            <>
              <div className="item" onClick={(e) => handleClick(e, '#second')}>
                Servicios
                </div>
              <div className="item" onClick={(e) => handleClick(e, '#third')}>
                Casos
                </div>
            </>
          )}
        </Nav>
        {location.pathname !== "/contacto" && (
          <Contact>
            <Link to="/contacto" className="contact">
              <span className="text">Contacto</span>  <div className="circle"> <MdKeyboardArrowRight /></div>
            </Link>
          </Contact>)}
      </Container>
    </div>
  )
}

export default Header
