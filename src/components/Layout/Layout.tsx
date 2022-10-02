import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Container } from "@mui/material";
import { ContentWrapper } from "./style";

interface Props {
  children: JSX.Element | JSX.Element[];
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
