import Home from "../Home";
import About from "../About";
import { Navigate } from "react-router-dom";
import Login from "../page/login/Login";
import { SignUp } from "../page/signup/SignUp";
import { Schedule } from "../page/schedule/Schedule";

const routes = [
  { path: "/", element: <Navigate to="/main" /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/main", element: <Home /> }, // 또는 다른 컴포넌트
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/schedule",
    element: <Schedule schedule={[-1, 137, -1, -1, -1, -1, -1]} />,
  },
];

export default routes;
