import {NavWrap, MenuButton, MenuBody} from "../style/styleNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from "react-redux";
import {navStatus, open, close} from "../redux/nav/navOpen";
import {useState} from "react";
import {insertOpen} from "../redux/modal/modaOpen";

function NavBar() {
    const navOpenStatus = useSelector(navStatus);
    const dispatch = useDispatch();
    const [isFirst, setIsFirst] = useState(true);

    const moveNav = () => {
        setIsFirst(false);
        if(!navOpenStatus.isNavOpen){
            dispatch(open());
        }else{
            dispatch(close());
        }
    }

    const insertModal = () => {
        dispatch(insertOpen());
    }

    return (
        <NavWrap>
            <div className={isFirst ? "" : navOpenStatus.isNavOpen ? "navRightMove" : "navLeftMove"}>
                <MenuBody>
                    <ul>
                        <li onClick={insertModal}>게시글 작성</li>
                        <li>내 게시글 보기</li>
                        <li>로그아웃</li>
                    </ul>
                </MenuBody>
                <MenuButton onClick={moveNav}>
                    <FontAwesomeIcon icon={faCaretLeft} />
                </MenuButton>
            </div>
        </NavWrap>
    )
}

export default NavBar;