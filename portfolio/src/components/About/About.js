import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


export const AboutWrapper = styled.div`
  margin-right: 8%;
  margin-left: 8%;
  padding-top: 50px;
  padding-bottom: 75px;
  /* padding: 0 50px; */
  width: auto;
  height: auto;
  background: #ffffff;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top:50px;
  @media screen and (max-width: 1380px) {
    flex-direction:column;
  }
  
`

export const AboutBio = styled.div`
  display: flex;
  justify-content:center;
  align-items: flex-start;
  flex-direction: column;
  text-align:left;
  width:50%;
  @media screen and (max-width: 1380px) {
    align-items:center;
    width:80%;
    text-align:center;
  }
`

export const AboutImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  width:35%;
  min-width:400px;
  @media screen and (max-width: 400px) {
    min-width:300px;
  }
`

export const AboutH1 = styled.h1`
  color: #000000;
  font-family: poppins;
  font-weight: 700;
  font-size: 60px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;

export const Bar = styled.div`
  height: 5px;
  width: 75px;
  background-color: #000000;
  text-align: center;
  margin-top: 10px;
`;

export const Self = styled.div`
  width: 100%;
  max-width:500px;
 
`;

export const AboutH2 = styled.h2`
  color: #75c9c0;
  font-family: poppins;
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 1px;
`;

export const AboutH3 = styled.h3`
  color: #75c9c0;
  font-family: poppins;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1px;
  font-style: italic;
`;

export const AboutP = styled.p`
  color: #000000;
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 1px;
  padding-top: 30px;
`;