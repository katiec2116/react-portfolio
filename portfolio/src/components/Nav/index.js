import React from 'react'
import { NavbarContainer, Icon, CloseIcon, NavbarWrapper, NavbarMenu, NavbarLink } from "./Navbar"

const Nav = ({ isOpen, toggle }) => {
    return (
        <NavbarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <NavbarWrapper>
                <NavbarMenu>
                    <NavbarLink onClick={toggle} to="about">
                        About
                    </NavbarLink>
                    <NavbarLink onClick={toggle} to="projects">
                        Projects
                    </NavbarLink>
                    <NavbarLink onClick={toggle} to="contact">
                        Contact
                    </NavbarLink>
                    <NavbarLink onClick={toggle} to="contact">
                        Resume
                    </NavbarLink>
                </NavbarMenu>
            </NavbarWrapper>
        </NavbarContainer>
    )
}

export default Nav;