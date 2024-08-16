import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const SignupForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // API 요청이나 폼 검증 로직 추가 가능
    console.log("Form Submitted:", { name, phoneNumber, password });
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <Box
        sx={{
          width: "400px",
          margin: "50px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
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
      </Box>
    </div>
  );
};

export default SignupForm;
