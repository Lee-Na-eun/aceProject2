import Main from 'pages/main';
import LoginSignup from 'pages/loginSignup';
import ProtectedRoute from 'common/protectedRoute';
import NavBar from 'component/nav';
import Mypage from "../pages/mypage";
import PostNew from "../pages/postNew";

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
        <NavBar /><Mypage />
      </ProtectedRoute>
    ),
  },
  {
    routePath: '/postNew',
    page : (
        <ProtectedRoute>
          <NavBar /><PostNew />
        </ProtectedRoute>
    )
  }
];
