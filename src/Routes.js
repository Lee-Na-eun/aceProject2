import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignup from "./pages/loginSignup";
import Main from "./pages/main";
import {useSelector} from "react-redux";
import {userInfoStatus} from "./redux/user/userInfo"
import {Navigate} from "react-router";

function RoutesCom() {
    const userTokenResult = useSelector(userInfoStatus);
    console.log(userTokenResult);

    return (
        <BrowserRouter>
            {/*{userTokenResult.userToken === '' ? <LoginSignup /> : }*/}

            <Routes>
                <Route path={'/'} element={<LoginSignup />} />
                {userTokenResult.userToken !== "" ? <Route path={'/main'} element={<Main />} /> :
                    <Route path={'/main'} element={<Navigate replace to={'/'} />} ></Route>
                }
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesCom;