import styled from "styled-components";

export const ToastWrapper = styled.div<{ $show: boolean; $bgColor: string }>`
  position: fixed;
  bottom: 50px;
  transform: translateX(-50%);
  background-color: var(${({ $bgColor }) => $bgColor});
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  z-index: 1000;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.3s ease;
  left: 50%;
`;
