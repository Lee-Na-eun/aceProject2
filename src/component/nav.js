import {NavWrap, MenuButton, MenuBody} from "../style/styleNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from "react-redux";
import {navStatus, open, close} from "../redux/nav/navOpen";
import {useState} from "react";
import {insertOpen} from "../redux/modal/modalOpen";
import { Link } from 'react-router-dom'
import {logoutOpen} from "../redux/modal/modalOpen";

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
                        <li>
                            <Link to={'/postNew'}>게시글 작성</Link>
                        </li>
                        <li>
                            <Link to={'/main'}>메인으로 가기</Link>
                        </li>
                        <li>
                            <Link to={'/mypage'}>내 게시글 보기</Link>
                        </li>
                        <li onClick={() => dispatch(logoutOpen())}>로그아웃</li>
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