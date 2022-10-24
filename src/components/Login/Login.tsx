import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";

interface LoginProps {
  loginOpen: boolean;
  handleLoginOpen: () => void;
}

type FormValues = {
  email: string;
  password: string;
};

const Login = ({ loginOpen, handleLoginOpen }: LoginProps) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit(async (data) => {
    const user = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
  });
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
          {...register("email")}
          onClick={handleLoginOpen}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form>
        <DialogContent dividers sx={{ padding: "15px" }}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ margin: "10px 0" }}
            {...register("password")}
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
          <Button variant="contained" onClick={onSubmit}>
            확인
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default Login;
