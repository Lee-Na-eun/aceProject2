import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignup from "./pages/loginSignup";
import Main from "./pages/main";

function RoutesCom() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginSignup />} />
                <Route path='/main' element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesCom;