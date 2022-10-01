import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Box, Container } from "@mui/material";

interface Props {
  children: React.ReactNode;
}
const Layout = (props: Props) => {
  return (
    <Box sx={{ flexDirection: "row" }}>
      <Header />
      <Sidebar />
      <Container>{props.children}</Container>
    </Box>
  );
};

export default Layout;
