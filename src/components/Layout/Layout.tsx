import React, { useState, useCallback } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Container, Box } from "@mui/material";
import { ContentWrapper } from "./style";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => {
    console.log("log");
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
            display: "flex",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {props.children}
        </Container>
      </ContentWrapper>
    </>
  );
};

export default Layout;
