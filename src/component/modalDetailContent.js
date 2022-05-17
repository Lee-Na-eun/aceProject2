import {
    ContentBox,
    ModalBox,
    ModalWrap,
    UsernameTitleBox
} from "../style/styleModal";
import {useDispatch, useSelector} from "react-redux";
import {contentStatus} from "../redux/modal/saveContent";
import {detailClose} from "../redux/modal/modaOpen";


function ModalDetail () {
    const dispatch = useDispatch();
    const detailContent = useSelector(contentStatus);


    const closeDetailModal = () => {
        dispatch(detailClose());
    }

    console.log(detailContent);


    return (
        <ModalWrap>
            <ModalBox>
                <UsernameTitleBox>
                    <div className={"titleWrap"}>
                        <p>Title</p>
                        <span>{detailContent.title}</span>
                    </div>
                    <div className={"userWrap"}>
                        <p>작성자</p>
                        <span>{detailContent.username}</span>
                    </div>
                </UsernameTitleBox>
                <ContentBox>{detailContent.content}</ContentBox>
            </ModalBox>
            <span onClick={closeDetailModal}>&times;</span>
        </ModalWrap>
    )
}

export default ModalDetail;