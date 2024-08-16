import Home from '../Home';
import About from '../About';
import { Navigate } from 'react-router-dom';
import Login from '../login/Login'
import Join from '../join/Join'

const routes = [
  { path: '/', element: <Navigate to="/main" /> },
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/main', element: <Home /> }, // 또는 다른 컴포넌트
  { path: '/login', element: <Login />},
  { path:'/signup', element: <Join />}
];

export default routes;
