import {useEffect, useState} from "react";
import {axiosApiInstance} from 'common/axiosToken'
import {TableBox, ContentListWrap, ContentAllBox} from "../style/styleMain";
import {saveBoard} from "../redux/modal/saveBoardId";
import {detailOpen, modalDetail} from "../redux/modal/modaOpen";
import {useDispatch, useSelector} from "react-redux";
import ModalDetail from "../component/ModalDetailContent";

function Main() {
    const [postContent, setPostContent] = useState([]);
    const [allPageNumber, setAllPageNumber] = useState(0);
    const [onColor, setOnColor] = useState(0);
    const resultBtn = [];
    const dispatch = useDispatch();
    const detailModalStatus = useSelector(modalDetail);

    useEffect(() => {
        axiosApiInstance.get(`/api/post-list`, {
            params: {
                size: 10,
                page: 0,
            }
        })
        .then((res) => {
            setPostContent(res.data.response.content);
            setAllPageNumber(res.data.response.totalPages);
            console.log('a', res.data.response);
        });
    }, []);

    for(let i = 0; i < allPageNumber; i++){
        resultBtn.push(i);
    }

    const nextPage = (btnIdx) => {
        axiosApiInstance.get(`/api/post-list`, {
            params: {
                size: 10,
                page: btnIdx,
            }
        })
        .then((res) => {
            setPostContent(res.data.response.content);
            setOnColor(btnIdx);
        });
    }

    const detailModalOpen = (boardId) => {
        dispatch(saveBoard({boardId : boardId}));
        dispatch(detailOpen());
    }


    return (
        <ContentAllBox>
            {detailModalStatus.detailModalOpen ? <ModalDetail /> : null}
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
                            <button onClick={() => detailModalOpen(el.boardId)}>상세보기</button>
                        </td>
                    </tr>)}
                    </tbody>
                </TableBox>
            </ContentListWrap>
            {resultBtn.map((el) =>
                <button key={el} onClick={() => nextPage(el)} style={el === onColor ? {backgroundColor : "#FF4F83", color : "white", transition : "0.4s"} : {backgroundColor : "white", transition : "0.4s"}}>{el + 1}</button>)}
        </ContentAllBox>
    )
}

export default Main;