import { useState, useCallback } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Container } from "@mui/material";
import { ContentWrapper } from "./style";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  return (
    <>
      <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <ContentWrapper isOpen={isOpen}>
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          {props.children}
        </Container>
      </ContentWrapper>
    </>
  );
};

export default Layout;
