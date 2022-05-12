import {useSelector} from "react-redux";
import {userInfoStatus} from "../redux/user/userInfo";
import {useEffect} from "react";

function Main () {
    const statusResult = useSelector(userInfoStatus);


    return (
        <div>main page</div>
    )
}

export default Main;