import styled from "styled-components";
import {
  flexStyles,
  selectInputStyles,
} from "../../../styles/CommonStyles.styles";
import { smallTextStyles } from "../../../styles/TextStyles.styles";

export const Filters = styled.div`
  ${flexStyles}
  gap: 24px;
  margin-bottom: var(--spacer-xs);
`;
export const SortWrapper = styled.div`
  ${flexStyles}
  gap: 8px;
`;
export const SortWrapperLabel = styled.div`
  ${smallTextStyles}

  font-weight: var(--text-semibold);
`;
export const SortSelect = styled.select`
  ${selectInputStyles}
`;
