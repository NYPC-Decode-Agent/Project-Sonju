import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/common/Button';
import { TextField } from '@/common/TextField';
import { Main, SmallPage } from '@/common/Container';
import { useSignUpMutation } from '@/api';

export const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const signUpMutation = useSignUpMutation();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signUpMutation.mutate({
      userInfo: {
        phone: phoneNumber,
        name,
        password,
      },
    });
    navigate('/');
  };

  return (
    <Main>
      <SmallPage header="회원가입">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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

          <div className="mt-4">
            <Button type="submit">회원가입</Button>
          </div>
        </form>
      </SmallPage>
    </Main>
  );
};
