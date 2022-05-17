import styled from "styled-components";

export const ModalWrap = styled.div`
    width : 100vw;
    height : 100vh;
    background-color : rgba(255,238,243,0.5);
    z-index : 10;
    position : fixed;
    display : flex;
    justify-content : center;
    align-items : center;
    > span {
        width : 50px;
        height : 50px;
        background-color : #FF4F83;
        font-size : 50px;
        line-height : 40px;
        color : white;
        margin-top : -250px;
        border-radius : 0 10px 10px 0;
        cursor : pointer;
    }
    > .deleteBtn {
        margin-top : -80px;
    }
`;


export const ModalBox = styled.div`
    width : 500px;
    height : 400px;
    background-color : #FF4F83;
    border-radius : 20px;
    > textarea {
        width : 400px;
        height : 200px;
        display : block;
        margin : 0 auto;
        border : none;
        font-size : 15px;
    }
    > textarea:focus {
        outline : none;
    }
    > button {
        width : 160px;
        height : 35px;
        margin-top : 15px;
        border: none;
        background-color : white;
        border-radius : 10px;
        color : #FF4F83;
        cursor : pointer;
    }
`;

export const UsernameTitleBox = styled.div`
   display : flex;
   width : 400px;
   margin : 0 auto;
   margin-top : 20px;
   justify-content: space-between;
   padding-bottom : 20px; 
   > .titleWrap {
      width : 300px;
      color : white;
      text-align : left;
      border-right : 2px solid white;
      > input {
        border : none;
        background-color:transparent;
        border-bottom : 2px solid white;
        color : white;
        font-size : 18px;
      }
      > input:focus{
        outline : none;
      }
      > p {
        font-size : 20px;
      }
   }
   > .userWrap {
     color : white;
     > p {
        font-size : 20px;
      }
   }
`;

export const ContentBox = styled.div`
    width : 400px;
    height : 220px;
    background-color : white;
    margin : 0 auto;
    text-align : left;
    padding : 10px 0 0 10px;
    border-radius : 20px;
    margin-top : 10px;
`;

export const DeleteModal = styled.div`
    width : 400px;
    height : 200px;
    background-color : #FF4F83;
    border-radius : 20px;
    > div {
        height : 140px;
        line-height : 140px;
        color : white;
        font-size : 20px;
        padding-top : 10px;
    }
    > button {
        width : 90px;
        height : 30px;
        border : none;
        border-radius : 10px;
        font-size : 12px;
        background-color : white;
    }
    > button:hover {
        cursor : pointer;
    }
`