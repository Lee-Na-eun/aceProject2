import {useSelector} from "react-redux";
import {userInfoStatus} from "../redux/user/userInfo";
import {Navigate} from "react-router";

function ProtectedRoute ({children}) {
    const userResult = useSelector(userInfoStatus)

    console.log(window.location.pathname);

    if(userResult.userToken === ''){
        return <Navigate replace to={'/'} />
    }

    return children
}

export default ProtectedRoute