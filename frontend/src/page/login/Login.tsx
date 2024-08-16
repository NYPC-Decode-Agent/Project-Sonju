import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // 최신 라우팅 훅

// 로그인 폼 데이터 타입 정의
interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null); // 에러 상태
  const navigate = useNavigate(); // 페이지 전환에 사용

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 여기에 로그인 API 요청을 넣습니다.
      // 예시: await api.login(formData.email, formData.password);

      // 성공 시 리다이렉트
      console.log('[formData : ]',formData)
      navigate('/main'); // 로그인 성공 후 대시보드 페이지로 이동

      // 실제 환경에서는 성공과 실패에 대한 처리가 필요합니다.
      // 성공 시 리다이렉트하고, 실패 시 에러 메시지를 설정합니다.
    } catch (err) {
      setError('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h5">로그인</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="이메일"
            name="email"
            value={formData.email}
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
