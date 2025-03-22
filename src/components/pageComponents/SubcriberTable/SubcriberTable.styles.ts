import styled from "styled-components";
import {
  flexStyles,
  scrollbarStyles,
} from "../../../styles/CommonStyles.styles";
import {
  ellipsisTextStyles,
  titleStyles,
} from "../../../styles/TextStyles.styles";

export const Wrapper = styled.div`
  border: 2px solid var(--border-color);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius-medium);
  padding: 24px;
  background-color: var(--white-color);
  margin: 24px 0;
  position: relative;
`;
export const StatusText = styled.div`
  position: absolute;
  top: 32px;
  right: 0;
  left: 0;
  padding: 8px 16px;
  background-color: var(--primary-color);
  color: var(--white-color);
  text-align: center;
  border-radius: var(--border-radius-medium);
  margin: 0 auto;
  width: fit-content;
  box-shadow: var(--box-shadow);
  z-index: 1;
`;
export const TableTitle = styled.div`
  ${titleStyles}
  ${flexStyles}
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  margin-bottom: var(--spacer-sm);
`;
export const NoData = styled.div`
  ${flexStyles}
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
`;
export const TableRow = styled.div`
  ${flexStyles}
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
`;

export const TableBody = styled.div`
  ${scrollbarStyles}
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 260px;
  max-height: 260px;
  overflow: auto;
  padding-right: 4px;
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
