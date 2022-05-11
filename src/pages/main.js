import {useSelector} from "react-redux";
import {userInfoStatus} from "../redux/user/userInfo";
import {useEffect} from "react";

function Main () {
    const statusResult = useSelector(userInfoStatus);

    if(statusResult.userToken === ''){
        alert('로그인 먼저 해주세요.');
        console.log('dddd')
        window.location.replace('/');
    }

    console.log(statusResult);

    return (
        <div>main page</div>
    )
}

export default Main;