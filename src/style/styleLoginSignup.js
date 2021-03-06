import styled from "styled-components";

export const LoginSignupWrap = styled.div`
    display : flex;
    height : 100vh;
    justify-content : center;
    align-items : center;
    background-color : #E4DDE1;
`;

export const LoginBox = styled.div`
    width : 450px;
    height : 500px;
    border : 2px solid #B6AAAD;
    background-color : white;
    border-radius : 10px;
    display : flex;
    flex-direction :column;
    justify-content : center;
    align-items : center;
    > h3{
        width : 350px;
        height : 50px;
        font-size : 25px;
        line-height : 50px;
        border-left : 6px solid #FF4F83;
    }
`;

export const InputBox = styled.div`
   width : 350px;
   display : flex;
   flex-direction : column;
   height : 300px;
   margin : 0 auto;
   > input {
    height : 40px;
    margin-top : 20px;
    border : 2px solid #ddd;
    transition : 0.3s;
    padding-left : 10px;
    border-radius : 10px;
    font-size : 13px;
   }
   input:focus {
    outline : none;
    border : 2px solid #FF4F83;
   }
   > button {
    height : 50px;
    margin-top : 40px;
    border : none;
    border-radius : 10px;
    background-color : #E4DDE1;
    cursor : pointer;
    transition : 0.3s;
    // color : white;
   }
   > button:hover {
    background-color : #FF4F83;
    color : white;
   }
`;

export const SignupButton = styled.div`
    width : 100px;
    height : 100px;
    background-color : #FF4F83;
    position : absolute;
    left : 59%;
    top : 28%;
    border-radius : 100px;
    color : white;
    font-family : bold;
    line-height : 100px;
    font-size : 18px;
    cursor : pointer;
    transition : 0.2s;
    :hover{
        width : 120px;
        height : 120px;
        text-align : center;
        line-height : 120px;
        font-size : 22px;
    }
`;

export const SignupBox = styled.div`
    width : 450px;
    height : 500px;
    border : 2px solid #B6AAAD;
    background-color : #FF4F83;
    border-radius : 10px;
    display : flex;
    flex-direction :column;
    justify-content : center;
    align-items : center;
    > h3{
        width : 350px;
        height : 50px;
        font-size : 25px;
        line-height : 50px;
        border-left : 6px solid white;
        color : white;
    }
`;

export const CloseButton = styled.span`
    color : white;
    font-size : 50px;
    position : absolute;
    left : 88%;
    top : 2%;
    cursor : pointer;
    transition : 0.5s;
    width : 50px;
    height : 50px;
    text-align : center;
    line-height : 40px;
    :hover {
        transform : rotate(-90deg)
    }
`;

export const SignupInputBox =styled.div`
   width : 350px;
   display : flex;
   flex-direction : column;
   height : 300px;
   margin : 0 auto;
   > #nicknameWrap {
    > button {
        width : 80px;
        height : 34px;
        margin-left : 20px;
        border-radius : 10px;
        border : none;
        background-color : white;
        color : #FF4F83;
        font-size : 12px;
        cursor : pointer;
        transition : 0.2s;
    }
    > button:hover {
        background-color : #FFEDF2;
    }
    > input{
       height : 30px;
       width : 230px;
        border : 2px solid #ddd;
        transition : 0.3s;
        padding-left : 10px;
        border-radius : 10px;
        font-size : 13px;
    }
    > input:focus {
    outline : none;
    border : 2px solid white;
   }
   }
   > #passwordWrap {
    display : flex;
    margin-top : 20px;
    > input {
       width : 150px;
       height : 30px;
       border : 2px solid #ddd;
       border-radius : 10px;
       padding-left : 10px;
       font-size : 13px;
       transition : 0.2s;
    }
    > input:focus {
    outline : none;
    border : 2px solid white;
   }
    > input:nth-child(2){
        margin-left : 18px;
    }
   }
   > input {
    height : 30px;
    margin-top : 20px;
    border : 2px solid #ddd;
    transition : 0.3s;
    padding-left : 10px;
    border-radius : 10px;
    font-size : 13px;
   }
   input:focus {
    outline : none;
    border : 2px solid white;
   }
   > button {
    height : 50px;
    margin-top : 40px;
    border : none;
    border-radius : 10px;
    background-color : white;
    color : #FF4F83;
    cursor : pointer;
    transition : 0.3s;
   }
   > button:hover {
    background-color : #FFEDF2;
   }
`;