import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";

interface LoginProps {
  loginOpen: boolean;
  handleLoginOpen: () => void;
}
const Login = ({ loginOpen, handleLoginOpen }: LoginProps) => {
  return (
    <Dialog open={loginOpen}>
      <DialogTitle>
        로그인
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
          }}
          onClick={handleLoginOpen}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ padding: "15px" }}>
        <TextField
          id="standard-basic"
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ margin: "10px 0" }}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="outlined"
          fullWidth
          error={false}
          sx={{ margin: "10px 0" }}
        />
      </DialogContent>
      <DialogActions sx={{ padding: "16px 24px" }}>
        <Button variant="contained">확인</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
