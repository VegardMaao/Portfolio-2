import styled from "styled-components";
import { theme } from "../../theme";
import { device } from "../../breakpoints";
import { NavLinkWrapperProps } from "../../../components/interfaces/styledComponentsInterfaces";

export const NavbarWrapper = styled.nav`
  max-width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3 rem;
  position: relative;
  background: ${theme.color.offwhite};

  .active {
    background: ${theme.color.blue};
    color: ${theme.color.orange};
  }

  .inactive {
    background: ${theme.color.offwhite};
    color: ${theme.color.blue};
  }

  @media (${device.sm}) {
    flex-direction: column;
    padding: 1rem;
  }
`;



export const NavLinkWrapper = styled.div<NavLinkWrapperProps>`
  transition: 0.5s;
  margin: auto;
  width: 70vw;
  display: flex;
  justify-content: space-between;

  @media (${device.sm}) {
    position: fixed;
    top: ${(props) => (props.o?.showOnMobile ? "0px" : "-100vh")};
    background: ${theme.color.offwhite};
    text-align: center;
    padding: 2rem 100vw;

    @media (${device.sm}) {
      display: flex;
      flex-direction: column;
      height: 80vh;
      justify-content: space-evenly;
      margin-left: none;
      background: ${theme.color.offwhite};
    }
  }
`;

export const StyledNavLink = styled.a`
  transition: 0.3s;
  text-decoration: none;
  color: ${theme.color.blue};
  font-size: 1.5rem; 
  margin-left: 2rem;
  padding: 10px;
  border-radius: 15px;

  &: hover {
    background: ${theme.color.blue};
    color: ${theme.color.orange};
  }

  @media (${device.sm}) {
    display: block;
    margin: 2rem auto;
    color: ${theme.color.blue};
  }
`;


export const StyledHamburgerIcon = styled.div`
  z-index: 100;
  display: none;
  position: relative;
  left: 40vw;
  top: 10px;


  i {
    font-size: 2.4rem;
  }

  @media (${device.sm}) {
    display: block;
    
  }
`;
