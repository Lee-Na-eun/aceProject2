import {
    ModalBox,
    ModalWrap,
    UsernameTitleBox
} from "../style/styleModal";
import {contentStatus} from "../redux/modal/saveContent";
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {axiosApiInstance} from "../common/axiosToken";
import {saveContentData} from "../redux/content/contentData";
import {editClose} from "../redux/modal/modalOpen";

function ModalEdit ({boardId}) {
    const dispatch = useDispatch();
    const detailContent = useSelector(contentStatus);
    const [editContent, setEditContent] = useState({
        title : ``,
        content : ``
    })

    useEffect(() => {
        axiosApiInstance.get(`/api/post/update/${boardId}`)
        .then((res) => {
            setEditContent({
                title: res.data.title,
                content: res.data.content
            })
        })
    }, []);


    const editContentHandler = (key) => (e) => {
        setEditContent({...editContent, [key] : e.target.value});
    }


    console.log(boardId)

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

    const updateEditContent = () => {
        axiosApiInstance.put(`/api/update/${boardId}/${editContent.title}/${editContent.content}`)
        .then((res) => {
            if(res.data.response === "UPDATE OK"){
                alert('수정이 완료 되었습니다.');
                dispatch(editClose());
                reloadContent();
            }
        });
    }

    return (
        <ModalWrap>
            <ModalBox>
                <UsernameTitleBox>
                    <div className={"titleWrap"}>
                        <p>Title</p>
                        <input onChange={editContentHandler('title')} value={editContent.title} />
                    </div>
                    <div className={"userWrap"}>
                        <p>작성자</p>
                        <span>{detailContent.username}</span>
                    </div>
                </UsernameTitleBox>
                <textarea value={editContent.content} onChange={editContentHandler('content')} />
                <button onClick={updateEditContent}>수정하기</button>
            </ModalBox>
            <span onClick={() => {dispatch(editClose())}}>&times;</span>
        </ModalWrap>
    )
}

export default ModalEdit