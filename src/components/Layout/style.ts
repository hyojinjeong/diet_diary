import styled from "@emotion/styled";

interface ContentProps {
  isOpen: boolean;
}

export const ContentWrapper = styled("div")`
  padding-top: 64px;
  margin-left: ${(props: ContentProps) => (props.isOpen ? "250px" : 0)};
  min-width: 350px;
  height: 100vh;
  transition: margin-left 0.5s;
`;
