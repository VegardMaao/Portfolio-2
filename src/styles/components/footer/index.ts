import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme";

export const FooterWrapper = styled.footer`
  min-height: 150px;
  max-width: 100vw;
  background-color: ${theme.color.offwhite};
  display: flex;
  justify-content: space-between;
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50vw;
  margin: auto;
`;

export const IconLink = styled(NavLink)`
  font-size: 3rem;
  color: ${theme.color.black};
  padding: 1rem;
  border-radius: 15px;

  &: hover {
    color: ${theme.color.orange};
    background: ${theme.color.black};
  }
`;
