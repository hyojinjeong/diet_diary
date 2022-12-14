import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

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
  const [loginStatus, setLoginStatus] = useState<boolean>(false);

  const handleLoginOpen = () => {
    setLoginOpen((prev) => !prev);
  };
  const handleRegOpen = () => {
    setRegOpen((prev) => !prev);
  };
  const handleLogout = async () => {
    await signOut(auth);
    setLoginStatus(false);
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
            {!loginStatus && (
              <Button color="inherit" onClick={handleRegOpen}>
                회원가입
              </Button>
            )}
            {loginStatus ? (
              <Button color="inherit" onClick={handleLogout}>
                로그아웃
              </Button>
            ) : (
              <Button color="inherit" onClick={handleLoginOpen}>
                로그인
              </Button>
            )}
          </Box>
          <Register regOpen={regOpen} handleRegOpen={handleRegOpen} />
          <Login
            loginOpen={loginOpen}
            handleLoginOpen={handleLoginOpen}
            setLoginStatus={setLoginStatus}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
