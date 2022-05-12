import Main from "../pages/main";
import LoginSignup from "../pages/loginSignup";

export const routePageDatas = [
    {routePath: '/', page : <LoginSignup />},
    {routePath : '/main', page : <Main />},
    {routePath : '/mypage'}
]