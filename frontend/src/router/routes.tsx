import Home from '../Home';
import { Navigate } from 'react-router-dom';
import Login from '../page/login/Login';
import { SignUp } from '../page/signup/SignUp';
import { Edit } from '../page/edit/Edit';
import { AllAlarmList } from '@/page/all_alarm_list/AllAlarmList';

const routes = [
  { path: '/', element: <Navigate to="/main" /> },
  { path: '/home', element: <Home /> },
  { path: '/main', element: <Home /> }, // 또는 다른 컴포넌트
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/all-alarm-list', element: <AllAlarmList /> },
  {
    path: '/edit',
    element: <Edit schedule={[-1, 137, -1, -1, -1, -1, -1]} />,
  },
];

export default routes;
