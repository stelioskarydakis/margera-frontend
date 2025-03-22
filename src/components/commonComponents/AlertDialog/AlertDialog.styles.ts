import styled from "styled-components";
import { titleStyles } from "../../../styles/TextStyles.styles";
import { flexStyles } from "../../../styles/CommonStyles.styles";

export const Wrapper = styled.div``;
export const AlertTitle = styled.div`
  ${titleStyles}
  margin-bottom: var(--spacer-sm);
`;
export const AlertText = styled.div``;
export const AlertButtons = styled.div`
  ${flexStyles}
  gap: 8px;
  margin-top: var(--spacer-sm);
`;
