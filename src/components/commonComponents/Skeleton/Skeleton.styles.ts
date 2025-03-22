import styled from "styled-components";

export const SkeletonWrapper = styled.div`
  background: #e0e0e0;
  border-radius: 4px;
  width: 100%;
  height: 30px;
  min-height: 30px;
  margin: 5px 0;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
