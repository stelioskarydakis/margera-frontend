import styled from "styled-components";
import { flexStyles } from "../../../styles/CommonStyles.styles";
import { ellipsisTextStyles } from "../../../styles/TextStyles.styles";

export const TableRow = styled.div`
  ${flexStyles}
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
`;

export const TableCell = styled.div`
  ${ellipsisTextStyles}
  padding-right: 1rem;
  flex: 1;
  max-width: 40%;

  &:last-child {
    max-width: 20%;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
`;
