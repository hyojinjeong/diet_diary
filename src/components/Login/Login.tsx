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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
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


const formSchema = yup.object().shape({
  email: yup.string().email("메일의 형식이 잘못되었습니다.").required("* 필수 입력 값 입니다."),
  password: yup.string().min(6, "최소 6자리 이상 입력해주세요.").required("* 필수 입력 값 입니다.").max(15, "최대 15자리 까지만 입력해주세요.")
});

const Login = ({ loginOpen, handleLoginOpen, setLoginStatus }: LoginProps) => {
const { register, handleSubmit, formState} = useForm<FormValues>({ mode: "onChange", resolver: yupResolver(formSchema)});

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      setLoginStatus(true);
      handleLoginOpen();
    } catch (error) {
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
        <DialogContent dividers sx={{ padding: "16px", maxWidth: "476px" }}>
          <TextField label="이메일" variant="outlined" fullWidth sx={{ margin: "10px 0" }} 
          error={Boolean(formState.errors.email)} {...register("email")}/>
          <ErrorMessage>{formState.errors.email?.message}</ErrorMessage>
          <TextField label="비밀번호" variant="outlined" type="password" fullWidth sx={{ margin: "10px 0" }}
            error={Boolean(formState.errors.password)} {...register("password", { required: true, minLength: 6 })}
          />
          <ErrorMessage>{formState.errors.password?.message}</ErrorMessage>
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
