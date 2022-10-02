import { ContentWrapper } from "./style";
import Container from "@mui/material/Container";

interface Props {
  children: React.ReactNode;
}

const Content = (props: Props) => {
  return (
    <ContentWrapper>
      <Container maxWidth="lg">{props.children}</Container>
    </ContentWrapper>
  );
};

export default Content;
