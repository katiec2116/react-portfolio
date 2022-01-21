import { FooterContainer, FooterH1, ContactContainer, ContactIcons, IconWrapper } from "./Footer"
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import "./footer.css"

function Footer() {

    return (
        <>
            <ContactContainer id="contact">
                <IconWrapper>
                    <ContactIcons>
                        <a href="mailto:katiecampbell21@outlook.com" target="_blank"> <GrMail className="icon" style={{color: "white"}}/> </a>
                    </ContactIcons>
                    <ContactIcons>
                        <a 
                            href="https://www.linkedin.com/in/katiec2116/"
                            target="_blank"
                        >
                            <FaLinkedinIn className="icon"style={{color: "white"}} />
                        </a>
                    </ContactIcons>
                    <ContactIcons >
                        <a 
                            href="https://github.com/katiec2116"
                            target="_blank"
                        >
                            <FaGithub className="icon"style={{color: "white"}} />
                        </a>
                    </ContactIcons>
                </IconWrapper>
            </ContactContainer>
            <FooterContainer>
                    <FooterH1>
                        Made with ♡ by Katie Campbell.
                    </FooterH1>
            </FooterContainer>
        </>
    )
}
export default Footer;

