import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 최신 라우팅 훅
import { Main, SmallPage } from '@/common/Container';
import { TextField } from '@/common/TextField';
import { Button } from '@/common/Button';
import { useSignInMutation } from '@/api';

export const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const signInMutation = useSignInMutation();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signInMutation.mutate({
      userInfo: {
        phone: phoneNumber,
        password,
      },
    });
    navigate('/');
  };

  return (
    <Main>
      <SmallPage header="로그인" subheader="안녕하세요? 씀씀이예요">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField
            placeholder="전화번호"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <TextField
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="mt-4 flex flex-col gap-3">
            <Button type="submit">로그인</Button>
            <Button type="submit" color="black">
              회원가입
            </Button>
          </div>
        </form>
      </SmallPage>
    </Main>
  );
};

export default Login;
