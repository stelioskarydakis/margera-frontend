import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: var(--white-color);
  padding: 24px;
  margin: 24px;
  border-radius: var(--border-radius-small);
  width: 100%;
  max-width: 400px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);

  & > img {
    width: 24px;
    height: auto;
  }

  &:hover {
    opacity: 0.7;
  }
`;
