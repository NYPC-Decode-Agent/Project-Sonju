import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 최신 라우팅 훅
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Main, SmallPage } from "../../common/Container";
import { TextField } from "../../common/TextField";
import { Button } from "../../common/Button";

// 로그인 폼 데이터 타입 정의
interface LoginFormData {
  phone: string;
  password: string;
}

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
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

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    postSignIn({ phone: phoneNumber, password });
    console.log(` sign in ${phoneNumber} ${password}`);
  };

  return (
    <Main>
      <SmallPage header="로그인">
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

          <div className="flex flex-col mt-4 gap-3">
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
