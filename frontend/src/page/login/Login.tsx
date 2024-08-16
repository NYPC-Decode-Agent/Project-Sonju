import React, { useState } from "react";
import { Button, TextField, Typography, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom"; // 최신 라우팅 훅
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// 로그인 폼 데이터 타입 정의
interface LoginFormData {
  phone: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    phone: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null); // 에러 상태
  const navigate = useNavigate(); // 페이지 전환에 사용

  const { mutate: postSignIn } = useMutation({
    mutationFn: ({ phone, password }: { phone: string; password: string }) =>
      axios.post("http://localhost:4000/api/user/sign-in", {
        userInfo: {
          phone,
          password,
        },
      }),
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    postSignIn({ phone: formData.phone, password: formData.password });
    console.log(` sign in ${formData.phone} ${formData.password}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, width: "400px" }}>
        <Typography variant="h5">로그인</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="전화번호"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="비밀번호"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
          >
            로그인
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
