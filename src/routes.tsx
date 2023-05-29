import { Navigate, Outlet, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import { useSelector } from 'react-redux';
import { selectIsLogin } from './reducers/userSlice';

// ----------------------------------------------------------------------

const GuardedRoute = () => {
  const isLogin = useSelector(selectIsLogin);

  if (isLogin) {
    return <Outlet />;
  }
  return <Navigate to="/login" replace />;
};

export default function Router() {
  return useRoutes([
    {
      element: <GuardedRoute />,
      children: [
        {
          path: '/dashboard',
          element: <DashboardLayout />,
          children: [
            { path: 'app', element: <DashboardApp /> },
            { path: 'user', element: <DashboardApp /> },
          ],
        },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
