import {useSelector} from "react-redux";
import {userInfoStatus} from "redux/user/userInfo";
import {useEffect} from "react";
import {axiosApiInstance} from 'common/axiosToken'

function Main () {
    const statusResult = useSelector(userInfoStatus);

    const test = () => {
        axiosApiInstance.get(`/api/post-list`)
        .then((res) => console.log('test',res.data));
    }

    console.log('', statusResult);

    return (
        <div onClick={test}>main page</div>
    )
}

export default Main;