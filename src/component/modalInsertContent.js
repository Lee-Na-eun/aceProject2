import {
    ModalBox,
    ModalWrap,
    UsernameTitleBox
} from "../style/styleModal";
import {useSelector, useDispatch} from "react-redux";
import {userInfoStatus} from "../redux/user/userInfo";
import {useState} from "react";
import {axiosApiInstance} from "../common/axiosToken";
import {insertClose} from "../redux/modal/modalOpen";
import {saveContentData} from "../redux/content/contentData";


function ModalInsert ({nextPage}) {
    const dispatch = useDispatch();
    const userInfo = useSelector(userInfoStatus);
    const [content, setContent] = useState({
        title : '',
        content : ''
    });

    const contentHandler = (key) => (e) => {
        setContent({...content, [key] : e.target.value});
    }

    const reloadContent = () => {
        axiosApiInstance.get(`/api/post-list`, {
            params: {
                size: 10,
                page: 0,
            }
        })
        .then((res) => {
            dispatch(saveContentData({contentData : res.data.response.content}))
        });
    }

    const postContent = () => {
        if(content.content === '' || content.title === ''){
            alert('모두 작성하고 등록해주세요.');
        }else{
            axiosApiInstance.post(`/api/post/insert`, {
                title : content.title,
                content : content.content,
                username : userInfo.username
            }).then((res) => {
                if(res.data.response === 'INSERT OK'){
                    alert('등록이 완료 되었습니다.');
                    dispatch(insertClose());
                    setContent({title: '', content : ''});
                    reloadContent();
                }
            })
        }
    }

    const closeModal = () => {
        dispatch(insertClose());
    }

    return (
        <ModalWrap>
            <ModalBox>
                <UsernameTitleBox>
                    <div className={"titleWrap"}>
                        <p>Title</p>
                        <input onChange={contentHandler('title')} />
                    </div>
                    <div className={"userWrap"}>
                        <p>작성자</p>
                        <span>{userInfo.username}</span>
                    </div>
                </UsernameTitleBox>
                <textarea onChange={contentHandler('content')} />
                <button onClick={postContent}>등록하기</button>
            </ModalBox>
            <span onClick={closeModal}>&times;</span>
        </ModalWrap>
    )
}

export default ModalInsert;