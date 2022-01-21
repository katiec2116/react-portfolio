import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  background: transparent;
  padding: ${({ large }) => (large ? "14px 48px" : "12px 30px;")};
  color: #ffffff;
  font-family: poppins;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border: 4px solid #DF96FF;
  margin-left: 15px;
  margin-right: 15px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #DF96FF;
    color: white;
    text-decoration: none;
  }
`;