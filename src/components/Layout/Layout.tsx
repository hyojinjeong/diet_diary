import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Box, Container } from "@mui/material";
import { ContentWrapper } from "./style";

interface Props {
  children: ReactNode;
}
const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <Sidebar />
      <ContentWrapper>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          {props.children}
        </Container>
      </ContentWrapper>
    </>
  );
};

export default Layout;
