import Main from 'pages/main';
import LoginSignup from 'pages/loginSignup';
import ProtectedRoute from 'common/protectedRoute';
import NavBar from 'component/nav';

export const routePageDatas = [
  { routePath: '/', page: <LoginSignup /> },
  {
    routePath: '/main',
    page: (
      <ProtectedRoute>
        <NavBar />
        <Main />
      </ProtectedRoute>
    ),
  },
  {
    routePath: '/mypage',
    page: (
      <ProtectedRoute>
        <NavBar />
      </ProtectedRoute>
    ),
  },
];
