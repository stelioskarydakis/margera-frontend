import styled, { css } from "styled-components";
import { smallTextStyles } from "./TextStyles.styles";

export const containerStyles = css`
  max-width: 1200px;
  margin: 0 auto;
`;
export const flexStyles = css`
  display: flex;
  align-items: center;
`;
export const selectInputStyles = css`
  ${smallTextStyles}

  padding: 4px 8px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-small);
  background: var(--white-color);
  color: var(--primary-color);
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: var(--transition);
  outline: none;

  &:focus {
    box-shadow: var(--box-shadow);
  }

  &:disabled {
    background: var(--disable-color);
    cursor: not-allowed;
  }
`;

export const scrollbarStyles = css`
  &::-webkit-scrollbar {
    background-color: transparent;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
    height: 8px;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track-piece:end {
    background-color: var(--disable-color);
    margin-left: 12px;
    border-radius: 50px;
    margin-bottom: 12px;
  }

  &::-webkit-scrollbar-track-piece:start {
    background-color: var(--disable-color);
    margin-right: 12px;
    border-radius: 50px;
    margin-top: 2px;
  }
`;

export const Container = styled.div`
  ${containerStyles}
  padding:0 24px;
`;

export const StatusText = styled.div`
  font-size: var(--font-size-smd);
  font-weight: var(--text-semibold);
  color: var(--primary-color);
  margin-top: 24px;
`;
export const SubmitButton = styled.button`
  font-size: var(--font-size-base);
  font-weight: var(--text-semibold);
  padding: 8px 12px;
  background: var(--primary-color);
  color: var(--white-color);
  border: none;
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background: var(--disable-color);
    cursor: not-allowed;
  }
`;
export const ActionButton = styled.button<{ $bgColor?: string }>`
  font-size: var(--font-size-base);
  font-weight: var(--text-semibold);
  padding: 4px;
  background: ${(props) => props.$bgColor || "var(--primary-color)"};
  color: var(--white-color);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: var(--transition);
  width: 24px;
  height: 24px;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background: var(--disable-color);
    cursor: not-allowed;
  }

  & > img {
    width: 16px;
    height: auto;
  }
`;
export const Button = styled.button<{ $bgColor?: string }>`
  font-size: var(--font-size-smd);
  font-weight: var(--text-semibold);
  padding: 4px 8px;
  background: ${(props) => props.$bgColor || "var(--primary-color)"};
  color: var(--white-color);
  border: none;
  border-radius: var(--border-radius-small);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background: var(--disable-color);
    cursor: not-allowed;
  }

  & > img {
    width: 16px;
    height: auto;
  }
`;
export const LinkButton = styled.div`
  font-size: var(--font-size-base);
  font-weight: var(--text-semibold);
  color: var(--primary-color);
  border: none;
  cursor: pointer;
  transition: var(--transition);
  ${flexStyles}
  align-items: center;
  gap: 8px;
  background-color: transparent;

  &:hover {
    opacity: 0.9;
  }

  & > img {
    width: 16px;
    height: auto;
    margin-top: -4px;
  }
`;
export const InputElement = styled.input`
  padding: 8px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-small);
  background: var(--white-color);
  color: var(--primary-color);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  outline: none;

  &:focus {
    box-shadow: var(--box-shadow);
  }

  &:disabled {
    background: var(--disable-color);
    cursor: not-allowed;
  }
`;
export const TextError = styled.p`
  color: var(--danger-color);
  font-weight: var(--text-bold);
  font-size: var(--font-size-sm);
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.div`
  border-bottom: 1px solid var(--border-color);
  padding: 8px 0;

  & > span {
    font-weight: var(--text-bold);
  }

  &:last-child {
    border-bottom: none;
  }
`;
