import { useState, Dispatch, SetStateAction } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { ErrorMessage } from "./style";

interface LoginProps {
  loginOpen: boolean;
  handleLoginOpen: () => void;
  setLoginStatus: Dispatch<SetStateAction<boolean>>;
}

type FormValues = {
  email: string;
  password: string;
};

const Login = ({ loginOpen, handleLoginOpen, setLoginStatus }: LoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(user);
      setLoginStatus(true);
      handleLoginOpen();
    } catch (error) {
      console.log(error);
      const errorLog = error.toString();
      if (errorLog.includes("auth/wrong-password")) {
        alert("비밀번호가 틀렸습니다.");
      } else if (errorLog.includes("auth/user-not-found")) {
        alert("없는 아이디 입니다.");
      }
    }
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
          onClick={handleLoginOpen}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form>
        <DialogContent dividers sx={{ padding: "15px", maxWidth: "476px" }}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ margin: "10px 0" }}
            error={Boolean(errors.email)}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && errors.email.type === "required" && (
            <ErrorMessage>*필수 입력값입니다.</ErrorMessage>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <ErrorMessage>*메일의 형식이 잘못되었습니다.</ErrorMessage>
          )}
          <TextField
            id="standard-basic"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ margin: "10px 0" }}
            error={Boolean(errors.password)}
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && errors.password.type === "required" && (
            <ErrorMessage>*필수 입력값입니다.</ErrorMessage>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <ErrorMessage>*6자리 이상 입력해주세요.</ErrorMessage>
          )}
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
