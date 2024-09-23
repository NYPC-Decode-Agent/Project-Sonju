import { Home } from '@/Home';
import { Login } from '@/page/login/Login';
import { SignUp } from '@/page/signup/SignUp';
import { Edit } from '@/page/edit/Edit';
import { Dashboard } from '@/page/Dashboard/Dashboard';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/edit/:id', element: <Edit /> },
];

export default routes;
