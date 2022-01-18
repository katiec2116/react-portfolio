import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

export const NavbarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #010101;
  z-index: 999;
  display: grid;
  align-items: center;
  Nav: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  Nav: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #ffffff;
`;

export const Icon = styled.div`
  position: absolute;
  Nav: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  background: transparent;
  cursor: pointer;
  outline: none;
`;

export const NavbarWrapper = styled.div`
  color: #ffffff;
`;
export const NavbarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat (6, 60px);
  }
`;

export const NavbarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  font-family:poppins;
  font-weight:600;
  cursor: pointer;
  font-size:2.5rem;
  &:hover {
    color: #555555;
    transition: 0.2s ease-in-out;
  }
`;

