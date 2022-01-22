import React from 'react'
import {AboutContainer, AboutWrapper, AboutH1, Bar, AboutH2, AboutContent, AboutImage, AboutBio, Self, AboutH3, AboutP} from "./About"
// import self from "../../self.png"

const About = () => {
    return (
        <>
            <AboutContainer id="about">
                <AboutWrapper>
                   
                    <AboutH1>
                        The Dev
                        <Bar />
                    </AboutH1>
 <AboutContent>
                    <AboutImage>
                    <Self>
                    {/* <img src={self}/> */}
                </Self></AboutImage>

                <AboutBio>
                    <AboutP>
                    My name is Katie and I'm a software engineer. Not long after graduating from Florida State University with a masters in GIS, I decided to switch careers and pursue programming. 

                    ***** add something here ****** 
                    
                    . When I'm not coding, you can find me rollerblading, snowboarding, road-tripping, and brunching with my friends. 
                    </AboutP>
                    </AboutBio>
                    </AboutContent>
                </AboutWrapper>
            </AboutContainer>  
        </>
    )
}

export default About;