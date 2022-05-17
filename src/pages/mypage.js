import {useEffect, useState} from "react";
import {axiosApiInstance} from "../common/axiosToken";
import ModalDetail from "../component/modalDetailContent";
import ModalInsert from "../component/modalInsertContent";
import {ContentAllBox, ContentListWrap, TableBox} from "../style/styleMain";

function Mypage () {
    const [myContent, setMyContent] = useState([]);
    const resultBtn = [];
    const [allPageNumber, setAllPageNumber] = useState(0);
    const [onColor, setOnColor] = useState(0);
    const [isDelete, setIsDelete] = useState(false);


    useEffect(() => {
        axiosApiInstance.get(`/api/my-post`, {
            params : {
                size : 10,
                page : 0
            }
        }).then((res) => {
            setMyContent(res.data.response.content);
            setAllPageNumber(res.data.response.totalPages);
            // console.log(res.data.response.totalPages);
        })
    }, []);

    console.log(myContent)
    for(let i = 0; i < allPageNumber; i++){
        resultBtn.push(i);
    }

    const nextMypage = (btnIdx) => {
        axiosApiInstance.get(`/api/post-list`, {
            params : {
                size : 10,
                page : btnIdx
            }
        }).then((res) => {
            // if(res.data.response.delete === 1){
            //     setIsDelete(true);
            // }else{
            //     setIsDelete(false);
            // }
            console.log(res.data.response)
            setMyContent(res.data.response.content);
            setOnColor(btnIdx);
        })
    }



    return (
        <ContentAllBox>
            {/*{detailModalStatus.detailModalOpen ? <ModalDetail /> : null}*/}
            {/*{detailModalStatus.insertModalOpen ? <ModalInsert nextPage={nextPage} /> : null}*/}
            <ContentListWrap>
                <TableBox>
                    <thead>
                    <tr>
                        <th>Content Id</th>
                        <th>Title</th>
                        <th>삭제하기</th>
                        <th>수정하기</th>
                    </tr>
                    </thead>
                    <tbody>
                    {myContent.map((el, idx) => <tr key={idx}>
                        <td>
                            {el.boardId}
                        </td>
                        <td>
                            {el.title}
                        </td>
                        <td>
                            {el.delete === 1 ? "삭제된 항목입니다." : <button>삭제하기</button>}
                        </td>
                        <td>
                            <button>수정하기</button>
                        </td>
                    </tr>)}
                    </tbody>
                </TableBox>
            </ContentListWrap>
            {resultBtn.map((el) =>
                <button key={el} onClick={() => nextMypage(el)} style={el === onColor ? {backgroundColor : "#FF4F83", color : "white", transition : "0.4s"} : {backgroundColor : "white", transition : "0.4s"}}>{el + 1}</button>)}
        </ContentAllBox>
    )
}

export default Mypage