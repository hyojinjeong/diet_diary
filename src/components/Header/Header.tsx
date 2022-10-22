import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";

interface HeaderProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const Header = React.memo(({ toggleSidebar }: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#8F83D6" }}>
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button color="inherit" onClick={handleClickOpen}>
            Login
          </Button>
          <IconButton
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
              Login
              <IconButton
                aria-label="close"
                sx={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                margin="normal"
                fullWidth
              />
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                margin="normal"
                fullWidth
                error={true}
                helperText="Incorrect entry."
              />
            </DialogContent>
            <DialogActions>
              <Button autoFocus>confirm</Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default Header;
