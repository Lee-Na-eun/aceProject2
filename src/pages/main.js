import {useSelector} from "react-redux";
import {userInfoStatus} from "redux/user/userInfo";
import {useEffect, useState} from "react";
import {axiosApiInstance} from 'common/axiosToken'

function Main() {
    const [postContent, setPostContent] = useState([]);
    useEffect(() => {
        axiosApiInstance.get(`/api/post-list`)
        .then((res) => {
            setPostContent(res.data.response.content);
            console.log('버튼 만들 때 필요', res.data.response.totalPages)
        });
    }, [])
    // const statusResult = useSelector(userInfoStatus);
    // console.log('', statusResult);

    // console.log('',postContent)

    return (
        <div>
            {/*{postContent.map((el,idx) => <div key={idx}>*/}
            {/*    <div>{el.boardId}</div>*/}
            {/*    <div>{el.title}</div>*/}
            {/*</div>)}*/}
            <table>
                <thead>
                <tr>
                    <th>Content Id</th>
                    <th>Title</th>
                    <th>Username</th>
                    <th>상세보기</th>
                </tr>
                </thead>
                <tbody>
                {postContent.map((el, idx) => <tr key={idx}>
                    <td>
                        {el.boardId}
                    </td>
                    <td>
                        {el.title}
                    </td>
                    <td>
                        {el.username}
                    </td>
                    <td>
                        <button>상세보기</button>
                    </td>
                </tr>)}

                </tbody>
            </table>
        </div>
    )
}

export default Main;