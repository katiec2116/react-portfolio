import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import "./Nav.css"
import logo from "../../assets/initialLogo.png"


const Navigation = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            {/* <Container> */}
                <Navbar.Brand href="#home"><img src={logo} width="60px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link>Resume</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
    )
}

export default Navigation;