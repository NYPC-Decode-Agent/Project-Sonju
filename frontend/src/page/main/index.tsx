import logo from "./logo.svg";
import "./App.css";
import { Button } from "../../common/button";
import { Input } from "../../common/Input";
import { useState } from "react";

export const Main = () => {
  const [value, setValue] = useState("김철수");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Input onChange={setValue} value={value} label="이름" />
        <Button onClick={() => {}}>Learn React</Button>
        </header>
    </div>
  );
};
