import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import ValueCoins from './pages/ValueCoins';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
// import Page404 from './pages/Page404';
import MyCoOwning from './pages/MyCoOwning';
import DashboardAppPage from './pages/DashboardAppPage';
import GoldCoins from './pages/GoldCoins';
import RevenueStore from './pages/RevenueStore';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'myco-owning', element: <MyCoOwning /> },
        { path: 'my-value-coins', element: <ValueCoins /> },
        { path: 'my-gold-coins', element: <GoldCoins /> },
        { path: 'revenue-store', element: <RevenueStore /> },
        { path: 'value', element: <UserPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        // { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
