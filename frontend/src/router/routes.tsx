import Home from "../Home";
import About from "../About";
import { Navigate } from "react-router-dom";
import Login from "../page/login/Login";
import Join from "../page/join/Join";
import { Schedule } from "../page/schedule/Schedule";
import { Container, Paper } from "@mui/material";

const routes = [
  { path: "/", element: <Navigate to="/main" /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/main", element: <Home /> }, // 또는 다른 컴포넌트
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Join /> },
  { path: "/schedule", element: (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, width: "400px" }}>
        <Schedule schedule={[-1, 1440, -1, -1, -1, -1, -1]} />
      </Paper>
    </Container>
  )},
];

export default routes;
