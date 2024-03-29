import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #090909;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FooterH1 = styled.h1`
  color: #DF96FF;
  font-size: 14px;
  font-weight: 300;
  margin-top: 30px;
  margin-bottom: 50px;
  font-family: roboto;
  letter-spacing: 1px;
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
  color: green !important;
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

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
