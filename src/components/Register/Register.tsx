import { useState, useRef } from "react";
import { Button, Stack, TextField, IconButton, Dialog, DialogContent, DialogTitle, DialogActions, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc, collection, query, where, getDocs} from "firebase/firestore";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { ErrorMessage } from "./style";

interface RegisterProps {
  regOpen: boolean;
  handleRegOpen: () => void;
}

type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
};

const formSchema = yup.object().shape({
  email: yup.string().email("메일의 형식이 잘못되었습니다.").required("* 필수 입력 값 입니다."),
  nickname: yup.string().required("* 필수 입력 값 입니다."),
  password: yup.string().min(6, "최소 6자리 이상 입력해주세요.").required("* 필수 입력 값 입니다.").max(15, "최대 15자리 까지만 입력해주세요."),
  passwordConfirm: yup.string().required("비밀번호를 확인해주세요.").oneOf([yup.ref('password'), null], "비밀번호가 일치하지 않습니다.")
});

const Register = ({ regOpen, handleRegOpen }: RegisterProps) => {
  const emailVal = useRef<HTMLInputElement>(null);
  const nicknameVal = useRef<HTMLInputElement>(null);
  const [emailChk, setEmailChk] = useState<boolean>(false);
  const [nicknameChk, setNicknameChk] = useState<boolean>(false);

  const { register, handleSubmit, formState} = useForm<FormValues>({ mode: "onChange", resolver: yupResolver(formSchema)});
  const onSubmit = handleSubmit(
    async (data) => { 
      if(emailChk && nicknameChk){
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
      } else {
        alert('이메일, 닉네임 중복확인 체크해주세요.')
      }      
    });
  
  const checkIdDuplicate = async () => {
    const userRef = collection(db, "users");
    const q = query(userRef, where("email", "==", emailVal?.current.value));
    const result = await getDocs(q).then(data => Boolean(data.docs[0]));
    if(result){
      alert('중복 된 이메일이 있습니다')
    } else {
      setEmailChk(true);
      alert('사용 가능 한 이메일 입니다.')
    }
  }

  const checkNicknameDuplicate = async () => {
    const userRef = collection(db, "users");
    const q = query(userRef, where("nickname", "==", nicknameVal?.current.value));
    const result = await getDocs(q).then(data => Boolean(data.docs[0]));
    if(result){
      alert('중복 된 닉네임이 있습니다')
    } else {
      setNicknameChk(true);
      alert('사용 가능 한 닉네임 입니다.')
    };
  }

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
        <DialogContent dividers sx={{ minWidth: "476px", maxWidth: "476px", padding: "16px"}}>
          <Box sx={{marginBottom: "16px"}}>
            <Stack direction="row">
              <TextField inputRef={emailVal} label="이메일" variant="outlined" size="small" fullWidth
                error={Boolean(formState.errors.email)} {...register("email")} />
                <Button variant="contained" size="small"  sx={{ ml: 1, boxSizing: 'content-box'}} onClick={checkIdDuplicate}>
                중복확인
              </Button>
            </Stack>
          <ErrorMessage>{formState.errors.email?.message}</ErrorMessage>
          </Box>
          <Box sx={{marginBottom: "16px"}}>    
            <Stack direction="row">
              <TextField inputRef={nicknameVal} label="닉네임" variant="outlined" size="small" fullWidth inputProps={{margin: "dense"}} 
              error={Boolean(formState.errors.nickname)} {...register("nickname")} />
              <Button variant="contained" size="small" sx={{ ml: 1, boxSizing: 'content-box'}} onClick={checkNicknameDuplicate}>
              중복확인
              </Button>
            </Stack>
          <ErrorMessage>{formState.errors.nickname?.message}</ErrorMessage>
          </Box>
          <Box sx={{marginBottom: "16px"}}>
            <TextField label="비밀번호" variant="outlined" size="small" fullWidth type="password" error={Boolean(formState.errors.password)} {...register("password")} />
            <ErrorMessage>{formState.errors.password?.message}</ErrorMessage>
          </Box>       
            <TextField label="비밀번호 확인" variant="outlined" size="small" fullWidth type="password" error={Boolean(formState.errors.password)} {...register("passwordConfirm")} />
            <ErrorMessage>{formState.errors.passwordConfirm?.message}</ErrorMessage> 
        </DialogContent>
        <DialogActions sx={{ padding: "16px" }}>
          <Button variant="contained" onClick={onSubmit}>
            회원가입
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default Register;
