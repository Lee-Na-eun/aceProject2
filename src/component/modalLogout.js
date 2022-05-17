import {DeleteModal, ModalWrap} from "style/styleModal";
import {axiosApiInstance} from "common/axiosToken";
import {logout} from "../redux/user/userInfo";
import {logoutClose} from "../redux/modal/modalOpen";
import {useDispatch} from "react-redux";

function ModalLogout () {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
        alert('로그아웃이 완료되었습니다.');
        dispatch(logoutClose());
    }

    return (
        <ModalWrap>
            <DeleteModal>
                <div>로그아웃 하시겠습니까?</div>
                <button onClick={logoutHandler}>로그아웃</button>
            </DeleteModal>
            <span className={"deleteBtn"} onClick={() => dispatch(logoutClose())}>&times;</span>
        </ModalWrap>
    )
}

export default ModalLogout