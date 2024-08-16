import React, { useState } from "react";

export function UpdateNumber({
  updateNum,
  num,
}: {
  updateNum: React.Dispatch<React.SetStateAction<number>>;
  num: number;
}) {
  // num 타입 추가

  const add = () => {
    updateNum(num + 1);
  };

  return (
    <div style={{ color: "red" }}>
      <button onClick={add}>+</button>
      <h1>{num}</h1>
    </div>
  );
}

export default function Home() {
  const [num, updateNum] = useState(0); // num 상태를 Home 컴포넌트로 이동

  return (
    <div>
      <div className="w-fit">
        <img
          src="./landing1.png"
          className="w-full h-auto"
          alt="landing1"
        ></img>
      </div>
      <div className="w-fit">
        <img
          src="./landing2.png"
          className="w-full h-auto"
          alt="landing2"
        ></img>
      </div>
      <div className="w-fit">
        <img
          src="./landing3.png"
          className="w-full h-auto"
          alt="landing3"
        ></img>
      </div>
      <div className="w-fit">
        <img
          src="./landing4.png"
          className="w-full h-auto"
          alt="landing4"
        ></img>
      </div>
      <div className="w-fit">
        <img
          src="./landing5.png"
          className="w-full h-auto"
          alt="landing5"
        ></img>
      </div>
    </div>
  );
}

// <textarea className="flex w-full rounded-md outline-none transition border border-gray-400 hover:border-gray-900 focus:border-gray-900">{script}</textarea>
