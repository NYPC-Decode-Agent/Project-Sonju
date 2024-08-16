import logo from "./logo.svg";
import "./App.css";
import { Button } from "../../common/button";

export const Main = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button onClick={() => {}}>Learn React</Button>
      </header>
    </div>
  );
};
