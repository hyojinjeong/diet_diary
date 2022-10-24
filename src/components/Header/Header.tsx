import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";

interface HeaderProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [regOpen, setRegOpen] = useState<boolean>(false);

  const handleLoginOpen = () => {
    setLoginOpen((prev) => !prev);
  };
  const handleRegOpen = () => {
    setRegOpen((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Button color="inherit" onClick={handleRegOpen}>
              회원가입
            </Button>
            <Button color="inherit" onClick={handleLoginOpen}>
              로그인
            </Button>
          </Box>
          {/* <IconButton
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          ></IconButton> */}
          <Register regOpen={regOpen} handleRegOpen={handleRegOpen} />
          <Login loginOpen={loginOpen} handleLoginOpen={handleLoginOpen} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
