import Main from "../pages/main";
import LoginSignup from "../pages/loginSignup";
import ProtectedRoute from "../component/protectedRoute";

export const routePageDatas = [
    {routePath: '/', page : <LoginSignup />},
    {routePath : '/main', page : <ProtectedRoute><Main /></ProtectedRoute>},
    {routePath : '/mypage'}
]