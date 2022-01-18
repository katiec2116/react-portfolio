import React, {useState, useEffect} from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Nav";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/initialLogo.png"
import {animateScroll as scroll} from "react-scroll"
// import Pdf from "../../Resume_06-2021.pdf"

const NavVisible = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 90) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  // const onResumeClick = ()  => {
  //   window.open(Pdf);
  // }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to="/" onClick={toggleHome}><img src={logo} width="60px"/></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" offset={-90}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" offset={-90}>Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" offset={-90}>Contact</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks onClick={onResumeClick}>Resume</NavLinks>
            </NavItem> */}
          </NavMenu>

        </NavContainer>
      </Nav>
    </>
  );
};

export default NavVisible;