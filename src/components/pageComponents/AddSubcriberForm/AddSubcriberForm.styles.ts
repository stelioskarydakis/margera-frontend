import styled from "styled-components";
import { titleStyles } from "../../../styles/TextStyles.styles";

export const Wrapper = styled.div`
  border: 2px solid var(--border-color);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius-medium);
  padding: 24px;
  background-color: var(--white-color);
  margin: 24px 0;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const Header = styled.div`
  ${titleStyles}

  margin-bottom: var(--spacer-sm);
`;
