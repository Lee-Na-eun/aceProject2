import './App.css';
import {useSelector} from "react-redux";
import {userInfoStatus} from "./redux/user/userInfo";
import RoutesCom from "./routes";

function App() {
    const resultUser = useSelector(userInfoStatus);
    console.log(window.location.pathname)
    console.log(resultUser);

    return (
        <div className="App">
            <RoutesCom />
        </div>
    );
}

export default App;