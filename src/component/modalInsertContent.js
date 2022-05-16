import {
    ContentBox,
    ModalBox,
    ModalWrap,
    UsernameTitleBox
} from "../style/styleModal";
import {useSelector} from "react-redux";
import {contentStatus} from "../redux/modal/saveContent";


function ModalInsert () {
    const detailContent = useSelector(contentStatus);

    return (
        <ModalWrap>
            <ModalBox>
                <UsernameTitleBox>
                    <div className={"titleWrap"}>
                        <p>Title</p>
                        <input></input>
                    </div>
                    <div className={"userWrap"}>
                        <p>작성자</p>
                        <span>{detailContent.username}</span>
                    </div>
                </UsernameTitleBox>
                <textarea>{detailContent.content}</textarea>
            </ModalBox>
            <span>&times;</span>
        </ModalWrap>
    )
}

export default ModalInsert;