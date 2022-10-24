import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

interface RegisterProps {
  regOpen: boolean;
  handleRegOpen: () => void;
}

type FormValues = {
  email: string;
  password: string;
};

const Register = ({ regOpen, handleRegOpen }: RegisterProps) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit(async (data) => {
    const user = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    console.log(user);
    handleRegOpen();
  });

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
      <form>
        <DialogContent dividers sx={{ padding: "15px" }}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ margin: "10px 0" }}
            {...register("email")}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            error={false}
            sx={{ margin: "10px 0" }}
            {...register("password")}
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

export default Register;
