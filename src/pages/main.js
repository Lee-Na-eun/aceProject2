import {useSelector} from "react-redux";
import {userInfoStatus} from "../redux/user/userInfo";
import {useEffect} from "react";

function Main () {
    const statusResult = useSelector(userInfoStatus);

    console.log('', statusResult);

    return (
        <div>main page</div>
    )
}

export default Main;