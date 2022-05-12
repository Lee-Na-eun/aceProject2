import './App.css';
import {useSelector} from "react-redux";
import {userInfoStatus} from "./redux/user/userInfo";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginSignup from "./pages/loginSignup";
import ProtectedRoute from "./component/protectedRoute";
import {routePageDatas} from "./data/pageData";

function App() {
    const resultUser = useSelector(userInfoStatus);
    console.log(resultUser);
    const routePage = routePageDatas.filter((el) => el.routePath === window.location.pathname)
    console.log('aaa', routePage);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<LoginSignup />} />
                    <Route path={routePage[0].routePath} element={<ProtectedRoute>
                        {routePage[0].page}
                    </ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;