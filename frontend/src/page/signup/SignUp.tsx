import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Button } from "../../common/Button";
import { TextField } from "../../common/TextField";
import { Main, SmallPage } from "../../common/Container";

export const SignUp: React.FC = () => {
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
