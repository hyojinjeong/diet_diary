import styled from "@emotion/styled";

interface ContentProps {
  isOpen: boolean;
}

export const ContentWrapper = styled("div")`
  margin-top: 64px;
  margin-left: ${(props: ContentProps) => (props.isOpen ? "230px" : 0)};
  min-width: 350px;
  height: calc(100vh - 64px);
  transition: margin-left 0.5s;
`;
