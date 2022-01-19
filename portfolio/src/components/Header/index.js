import React from 'react'
import { HeaderContainer, HeaderBackground, ImageBackground, HeaderContent, HeaderH1, HeaderP, HeaderButtonWrapper } from './Header'
// import "../../App.css"
import { init } from "ityped"
import { Button } from "../Button"
import {useEffect, useRef } from "react"
import pdf from "../kcampbell.pdf"

const Header = () => {
    
    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, { 
            showCursor: true, 
            backDelay:1500,
            strings: ['software engineer. ', 'GIS specialist. ', 'traveler. ' ]})
    }, [])

    const onResumeClick = ()  => {
        window.open(pdf);
      }

    return (
        <HeaderContainer>
            <HeaderBackground>
                <ImageBackground/>
            </HeaderBackground>
            <HeaderContent>
                <HeaderH1>Katie Campbell</HeaderH1>
                <HeaderP>I am a <span ref={textRef}> </span></HeaderP>
                <HeaderButtonWrapper>
                    <Button>
                        Latest Work
                    </Button>

                    <Button onClick={onResumeClick}>
                        View Resume
                    </Button>
                </HeaderButtonWrapper>
            </HeaderContent>

        </HeaderContainer>
    )
}

export default Header;