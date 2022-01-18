import React from 'react'
import { HeaderContainer, HeaderBackground, ImageBackground, HeaderContent, HeaderH1, HeaderP, HeaderButtonWrapper } from './Header'
import "../../App.css"
import { init } from "ityped"
import {useEffect, useRef } from "react"

const Header = () => {
    
    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, { 
            showCursor: true, 
            backDelay:1500,
            strings: ['software engineer. ', 'GIS specialist. ', 'traveler. ' ]})
    }, [])

    const onResumeClick = ()  => {
        // window.open(Pdf);
      }

    return (
        <HeaderContainer>
            <HeaderBackground>
                <ImageBackground/>
            </HeaderBackground>
            <HeaderContent>
                <HeaderH1>Katie Campbell</HeaderH1>
                <HeaderP>  <h4>I am a <span ref={textRef}> </span></h4></HeaderP>
                <HeaderButtonWrapper>
                    {/* <Button to="projects">
                        Latest Work
                    </Button> */}

                    {/* <Button onClick={onResumeClick}>
                        View Resume
                    </Button> */}
                </HeaderButtonWrapper>
            </HeaderContent>

        </HeaderContainer>
    )
}

export default Header;