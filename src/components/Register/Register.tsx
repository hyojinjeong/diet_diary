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
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ErrorMessage } from "./style";

interface RegisterProps {
  regOpen: boolean;
  handleRegOpen: () => void;
}

type FormValues = {
  email: string;
  password: string;
  nickname: string;
};

const Register = ({ regOpen, handleRegOpen }: RegisterProps) => {
  const { register, handleSubmit, formState: { errors }} = useForm<FormValues>();
  const onSubmit = handleSubmit(
    async (data) => { 
      const {email, nickname, password} = data;
      // 회원가입
      await createUserWithEmailAndPassword(auth, email, password);
      // 닉네임 필드 추가
      await setDoc(doc(db, "users", nickname), {
        email: email,
        nickname: nickname
      })
      alert('회원가입이 완료되었습니다!');
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
        <DialogContent dividers sx={{ padding: "15px", maxWidth: "476px" }}>
          <TextField label="Email" variant="outlined" fullWidth sx={{ margin: "10px 0" }} placeholder="이메일을 입력해주세요." error={Boolean(errors.email)} {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && errors.email.type === "required" && <ErrorMessage>*필수 입력값입니다.</ErrorMessage>}
          {errors.email && errors.email.type === "pattern" && <ErrorMessage>*메일의 형식이 잘못되었습니다.</ErrorMessage>}
          <TextField label="Nickname" variant="outlined" fullWidth sx={{ margin: "10px 0" }} placeholder="닉네임을 입력해주세요." error={Boolean(errors.email)} {...register("nickname", { required: true })} />
          {errors.email && errors.nickname.type === "required" && <ErrorMessage>*필수 입력값입니다.</ErrorMessage>}
          <TextField label="Password" variant="outlined" fullWidth type="password" placeholder="비밀번호를 입력해주세요." error={Boolean(errors.password)} sx={{ margin: "10px 0" }} {...register("password", { required: true, minLength: 6 })} />
          {errors.password && errors.password.type === "required" && <ErrorMessage>*필수 입력값입니다.</ErrorMessage>}
          {errors.password && errors.password.type === "minLength" && <ErrorMessage>*6자리 이상 입력해주세요.</ErrorMessage>}
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
