import {
    DeleteModal,
    ModalWrap,
} from "../style/styleModal";
import {axiosApiInstance} from "../common/axiosToken";
import {useDispatch} from "react-redux";
import {deleteClose} from "../redux/modal/modalOpen";
import {saveContentData} from "../redux/content/contentData";

function ModalDelete ({boardId}) {
    const dispatch = useDispatch();
    const deleteHandler = () => {
        axiosApiInstance.delete(`/api/post/delete/${boardId}`)
        .then((res) => {
            if(res.data.response === 'DELETE OK'){
                alert('삭제가 완료되었습니다.');
                reloadContent();
                dispatch(deleteClose());
            }
        })
    }
    const reloadContent = () => {
        axiosApiInstance.get(`/api/my-post`, {
            params: {
                size: 10,
                page: 0,
            }
        })
        .then((res) => {
            dispatch(saveContentData({contentData : res.data.response.content}))
        });
    }

    return (
        <ModalWrap>
            <DeleteModal>
                <div>정말 삭제하시겠습니까?</div>
                <button onClick={deleteHandler}>삭제하기</button>
            </DeleteModal>
            <span className={"deleteBtn"} onClick={() => dispatch(deleteClose())}>&times;</span>
        </ModalWrap>
    )
}

export default ModalDelete