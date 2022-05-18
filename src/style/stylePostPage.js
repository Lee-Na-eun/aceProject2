import styled from "styled-components";

export const PostBoxWrap = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const PostBox = styled.div`
    width : 700px;
    height : 500px;
    border : 4px solid #FF4F83;
    border-radius : 20px;
    > h3 {
        font-size : 30px;
        width : 400px;
        height : 100px;
        line-height : 100px;
        border-bottom : 4px solid #FF4F83;
        margin : 0 auto;
    }
    > button {
        width : 100px;
        height : 30px;
        margin-top : 20px;
        cursor : pointer;
    }
`;

export const TitleWrap = styled.div`
    width : 400px;
    height : 200px;
    margin : 0 auto;
    display : flex;
    align-items : center;
    justify-content : center;
    > p {
        text-align : left;
        font-size : 20px;
        padding-right : 20px;
    }
    > input {
        width : 300px;
        height : 40px;
        border : none;
        background-color : #ddd;
        outline : none;
    }
`;

export const ContentWrap = styled.div`
    width : 400px;
    margin : 0 auto;
    display : flex;
    align-items : center;
    justify-content : center;
    > p {
        text-align : left;
        font-size : 20px;
        padding-right : 20px;
    }
    > textarea {
        width : 300px;
        height : 100px;
        border : none;
        background-color : #ddd;
        outline : none;
    }
`;