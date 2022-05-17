import {useEffect, useState} from "react";
import {axiosApiInstance} from 'common/axiosToken'
import {TableBox, ContentListWrap, ContentAllBox} from "../style/styleMain";
import {saveContent} from "../redux/modal/saveContent";
import {detailOpen} from "../redux/modal/modalOpen";
import {useDispatch, useSelector} from "react-redux";
import {saveUsername} from "../redux/user/userInfo";
import {saveContentData, contentDataStatus} from "../redux/content/contentData";

function Main() {
    const [allPageNumber, setAllPageNumber] = useState(0);
    const [onColor, setOnColor] = useState(0);
    const [searchInput, setSearchInput] = useState('');
    const [isSearch, setIsSearch] = useState(false);
    const resultBtn = [];
    const dispatch = useDispatch();
    const contentData = useSelector(contentDataStatus);

    useEffect(() => {
        axiosApiInstance.get(`/api/post/userToken`)
        .then((res) => {
            dispatch(saveUsername({username : res.data.response}));
        });
        axiosApiInstance.get(`/api/post-list`, {
            params: {
                size: 10,
                page: 0,
            }
        })
        .then((res) => {
            dispatch(saveContentData({contentData : res.data.response.content}));
            setAllPageNumber(res.data.response.totalPages);
        });
    }, []);

    for(let i = 0; i < allPageNumber; i++){
        resultBtn.push(i);
    }

    const nextPage = (btnIdx, allOrSearch) => {
        axiosApiInstance.get(`/api/post-list?`, {
            params: {
                size: 10,
                page: btnIdx,
                search : searchInput
            }
        })
        .then((res) => {
            dispatch(saveContentData({contentData : res.data.response.content}));
            setOnColor(btnIdx);
        });
    }

    const detailModalOpen = (boardId) => {
        axiosApiInstance.get(`/api/detail/${boardId}`)
        .then((res) => {
            dispatch(saveContent({
                title : res.data.title,
                username : res.data.username,
                content : res.data.content
            }));

        });

        setTimeout(() => dispatch(detailOpen()),600)
    }

    const searchInputChange = (e) => {
        setSearchInput(e.target.value);
    }

    const searchResult = () => {
        axiosApiInstance.get(`/api/post-list?size=10&search=${searchInput}`)
        .then((res) => {
            console.log(res)
            dispatch(saveContentData({contentData : res.data.response.content}));
            setAllPageNumber(res.data.response.totalPages);
        })
    }

    return (
        <ContentAllBox>
            <ContentListWrap>
                <div className={'searchWrap'}>
                    <input placeholder={"Title로 검색해주세요."} onChange={searchInputChange} />
                    <button onClick={searchResult}>검색하기</button>
                </div>
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
                    {contentData.contentData.map((el, idx) => <tr key={idx}>
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