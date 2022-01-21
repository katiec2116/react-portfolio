import { FooterContainer, FooterContent, FooterH1, ContactContainer, ContactIcons, IconWrapper } from "./Footer"
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
function Footer() {

    return (
        <>
            <ContactContainer id="contact">
                <IconWrapper>
                    <ContactIcons>
                        <a id="contact" href="mailto:katiecampbell21@outlook.com" target="_blank"> <GrMail /> </a>
                    </ContactIcons>
                    <ContactIcons style={{color: "#DF96FF"}}>
                        <a 
                            id="contact"
                            href="https://www.linkedin.com/in/katiec2116/"
                            target="_blank"
                        >
                            <FaLinkedinIn />
                        </a>
                    </ContactIcons>
                    <ContactIcons>
                        <a
                            id="contact-icon"
                            href="https://github.com/katiec2116"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                    </ContactIcons>
                </IconWrapper>
            </ContactContainer>
            <FooterContainer>
                <FooterContent>
                    <FooterH1>
                        Made with ♡ by Katie Campbell.
                    </FooterH1>
                </FooterContent>
            </FooterContainer>
        </>
    )
}
export default Footer;

