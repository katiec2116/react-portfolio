import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Link as LinkScroll } from "react-scroll";

export const FooterContainer = styled.div`
  background-color: #090909;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FooterContent = styled.div`
  font-family: roboto;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 1px;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const FooterH1 = styled.h1`
  color: #DF96FF;
  font-size: 14px;
  font-weight: 300;
`;

export const ContactContainer = styled.div`
  background-color: #090909;
  padding-left: 8%;
  padding-right: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const ContactIcons = styled.div`
  color: yellow !important;
  margin-left: 25px;
  margin-right: 25px;
  font-size: 30px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: green;
  }
  @media screen and (max-width: 675px) {
    font-size: 20px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;


export const ContactContent = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const ContactMethod = styled.h1`
  color: white;
  font-family: roboto;
  font-weight: 400;
  font-size: 18px;
`;

export const ContactMessage = styled.span`
  color: #DF96FF;
  font-family: roboto;
  font-weight: 400;
  font-size: 18px;
`;