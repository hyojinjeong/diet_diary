import styled from "@emotion/styled";

export const ContentWrapper = styled.div<{ isOpen: boolean }>`
  padding-top: 64px;
  margin-left: ${({ isOpen }) => (isOpen ? "250px" : 0)};
  min-width: 350px;
  height: 100vh;
  transition: margin-left 0.5s;
`;
