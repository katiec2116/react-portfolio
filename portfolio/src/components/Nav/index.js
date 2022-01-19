import React, { useState, useEffect } from 'react'
import { Navbar, Nav } from "react-bootstrap"
import "./Nav.css"
import logo from "../../assets/initialLogo.png"
import PDF from "../kcampbell.pdf"



const Navigation = () => {
    const [background, setBackground] = useState(false)
    const ListenScroll = e => {
        if (window.scrollY > 100) {
            setBackground(true)
        } else {
            setBackground(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', ListenScroll)
    }, [])

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" id={background == true ? "dark" : "transparent"}>
            <Navbar.Brand href="#home"><img src={logo} width="60px" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <a class="navbar-link mx-2" href="#about">ABOUT</a>
                    <a class="navbar-link mx-2" href="#projects">PROJECTS</a>
                    <a class="navbar-link mx-2" href="#contact">CONTACT</a>
                    <a class="navbar-link mx-2" href={PDF} target="_blank">RESUME</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;