import styled from "styled-components";
import {
  flexStyles,
  selectInputStyles,
} from "../../../styles/CommonStyles.styles";
import { smallTextStyles } from "../../../styles/TextStyles.styles";

export const TableFooter = styled.div`
  ${flexStyles}
  gap: 24px;
  margin-top: var(--spacer-sm);
  justify-content: space-between;
  font-weight: var(--text-semibold);
`;
export const LeftSide = styled.div`
  ${flexStyles}
  gap: 16px;
`;
export const Total = styled.div`
  ${smallTextStyles}

  span {
    font-weight: var(--text-bold);
  }
`;
export const SortSelect = styled.select`
  ${selectInputStyles}
`;
export const ShowPerPage = styled.div`
  ${smallTextStyles}
  ${flexStyles}
    gap: 8px;
`;
export const Pagination = styled.div`
  ${flexStyles}
  gap: 16px;
`;
export const PaginationButton = styled.div<{ $isDisabled?: boolean }>`
  ${flexStyles}
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${({ $isDisabled }) =>
    $isDisabled ? "var(--disable-color)" : "var(--primary-color)"};
  border-radius: 50%;
  cursor: ${({ $isDisabled }) => ($isDisabled ? "not-allowed" : "pointer")};

  & > img {
    width: 16px;
  }
`;
export const PaginationText = styled.div`
  ${smallTextStyles}
`;
