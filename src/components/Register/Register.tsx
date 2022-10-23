import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";

interface RegisterProps {
  regOpen: boolean;
  handleRegOpen: () => void;
}
const Register = ({ regOpen, handleRegOpen }: RegisterProps) => {
  return (
    <Dialog open={regOpen}>
      <DialogTitle>
        회원가입
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
          }}
          onClick={handleRegOpen}
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

export default Register;
