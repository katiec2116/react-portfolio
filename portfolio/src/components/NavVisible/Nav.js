import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: ${({scrollNav}) =>(scrollNav ? '#000000' : "transparent")};
  height: 90px;
  width: auto;
  display: flex;
  align-items: center;
  top: 0;
  margin-top: -91px;
  position: sticky;
  padding-left: 3%;
  padding-right: 3%;
  z-index: 10;
  transition: 0.8s all ease;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  width: 100%;
  z-index: 1;
`;

export const NavLogo = styled.div`
  color: #fff;
  font-family:poppins;
  font-weight:600;
  cursor: pointer;
  font-size:2.5rem;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  height:50px;
  width:50px;
  top:10px;
  margin-bottom:0;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50px;
    right: 0;
    transform: translate(-100%, -60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #ffffff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 90px;
`;
export const NavLinks = styled(LinkScroll)`
  color: #fff;
  font-weight:600;
  letter-spacing:1px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-family: poppins;
  transition: all .3s ease-in-out;
  &.active {
    border-bottom: 3px solid #111111;
  }
  &:hover{
    color:#75C9C0;
  }
`;