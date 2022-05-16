import {useEffect, useState} from "react";
import {axiosApiInstance} from 'common/axiosToken'
import {TableBox, ContentListWrap} from "../style/styleMain";

function Main() {
    const [postContent, setPostContent] = useState([]);
    useEffect(() => {
        axiosApiInstance.get(`/api/post-list`, {
            params: {
                size: 10,
                page: 0,
            }
        })
        .then((res) => {
            setPostContent(res.data.response.content);
            console.log('버튼 만들 때 필요', res.data.response.totalPages);
            console.log('a', res.data.response);
        });
    }, []);

    return (
        <ContentListWrap>
            <TableBox>
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
            </TableBox>
        </ContentListWrap>
    )
}

export default Main;