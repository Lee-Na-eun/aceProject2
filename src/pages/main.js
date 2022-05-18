import {useEffect, useState} from "react";
import {axiosApiInstance} from 'common/axiosToken'
import {TableBox, ContentListWrap, ContentAllBox} from "../style/styleMain";
import {saveContent} from "../redux/modal/saveContent";
import {detailOpen} from "../redux/modal/modalOpen";
import {useDispatch, useSelector} from "react-redux";
import {saveUsername} from "../redux/user/userInfo";
import {saveContentData, contentDataStatus} from "../redux/content/contentData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

function Main() {
    const [allPageNumber, setAllPageNumber] = useState(0);
    const [onColor, setOnColor] = useState(0);
    const [searchInput, setSearchInput] = useState('');
    const [pageIdx, setPageIdx] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const [isFirst, setIsFirst] = useState(true);
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
            console.log('res : ',res)
        });
    }, []);

    for(let i = 0; i < allPageNumber; i++){
        resultBtn.push(i);
    }

    const nextPage = (btnIdx) => {
        if(btnIdx !== 0){
            setIsFirst(false);
        }
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
            setPageIdx(btnIdx);
            console.log('next : ', res)
            if(res.data.response.last){
                setIsFirst(false);
                setIsEnd(true);
            }else if(res.data.response.first){
                setIsFirst(true);
                setIsEnd(false);
            }
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
                            <span>{el.title}</span>
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

            {/*{resultBtn.map((el) =>*/}
            {/*    <button key={el} onClick={() => nextPage(el)} style={el === onColor ? {backgroundColor : "#FF4F83", color : "white", transition : "0.4s"} : {backgroundColor : "white", transition : "0.4s"}}>{el + 1}</button>)}*/}
            {pageIdx === 0 ? <div className={"pagingBtn"}>
                {resultBtn.map((el) => <button key={el} onClick={() => nextPage(el)} style={el === onColor ? {backgroundColor : "#FF4F83", color : "white", transition : "0.4s"} : {backgroundColor : "white", transition : "0.4s"}}>{el + 1}</button>)}
                <div className={"nextBtn"}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div className={"nextBtn"}>
                    <FontAwesomeIcon icon={faAnglesRight} />
                </div>
            </div> : null}
            {/*{sliceBtn(pageIdx)}*/}
        </ContentAllBox>
    )
}

export default Main;