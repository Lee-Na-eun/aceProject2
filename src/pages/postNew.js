import {
    ContentWrap,
    PostBox,
    PostBoxWrap,
    TitleWrap
} from "../style/stylePostPage";
import {axiosApiInstance} from "../common/axiosToken";
import {insertClose} from "../redux/modal/modalOpen";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {userInfoStatus} from "../redux/user/userInfo";
import {useNavigate} from "react-router";

function PostNew () {
    const dispatch = useDispatch();
    const [content, setContent] = useState({
        title : '',
        content : ''
    });
    const userInfo = useSelector(userInfoStatus);
    const navigate = useNavigate();

    const contentHandler = (key) => (e) => {
        setContent({...content, [key] : e.target.value});
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
                    navigate('/main')
                }
            })
        }
    }

    return <PostBoxWrap>
        <PostBox>
            <h3>게시글 등록</h3>
            <TitleWrap>
                <p>Title</p><input onChange={contentHandler('title')} />
            </TitleWrap>
            <ContentWrap>
                <p>Content</p><textarea onChange={contentHandler('content')} />
            </ContentWrap>
            <button onClick={postContent}>등록하기</button>
        </PostBox>
    </PostBoxWrap>
}

export default PostNew;