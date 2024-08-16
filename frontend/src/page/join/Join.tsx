import React, { useState } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const SignupForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: postSignUp } = useMutation({
    mutationFn: ({
      phone,
      name,
      password,
    }: {
      phone: string;
      name: string;
      password: string;
    }) =>
      axios.post("http://localhost:4000/api/user/sign-up", {
        userInfo: {
          phone,
          name,
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // API 요청이나 폼 검증 로직 추가 가능
    postSignUp({ phone: phoneNumber, name, password });
    console.log("Form Submitted:", { name, phoneNumber, password });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, width: "400px" }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          회원가입
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="핸드폰번호"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />

          <div className="mt-4">
            <Button type="submit" variant="contained" color="primary" fullWidth>
              회원가입
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default SignupForm;
