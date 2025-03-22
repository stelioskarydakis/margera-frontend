import styled from "styled-components";
import {
  containerStyles,
  flexStyles,
} from "../../../styles/CommonStyles.styles";
import { titleStyles } from "../../../styles/TextStyles.styles";

export const NavbarWrapper = styled.nav`
  position: sticky;
  z-index: 1000;
  top: 0;
  background-color: var(--primary-color);
  color: var(--white-color);
  padding: 12px 0;
`;
export const NavbarInner = styled.nav`
  ${containerStyles}
  ${flexStyles}
  justify-content: space-between;
  gap: 24px;

  nav {
    ${flexStyles}
    gap: 8px;

    a {
      color: var(--white-color);
      text-decoration: none;
      transition: var(--transition);

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Logo = styled.div`
  ${titleStyles}
`;
