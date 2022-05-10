import styled from "styled-components";

export const LoginSignupWrap = styled.div`
    display : flex;
    height : 100vh;
    justify-content : center;
    align-items : center;
    background-color : #E4DDE1;
`;

export const LoginSignupBox = styled.div`
    width : 450px;
    height : 500px;
    border : 2px solid #B6AAAD;
    background-color : white;
    border-radius : 20px;
    display : flex;
    flex-direction :column;
    justify-content : center;
    align-items : center;
    > h3{
        width : 350px;
        height : 50px;
        font-size : 25px;
        line-height : 50px;
        border-left : 6px solid #DF2059;
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
    font-size : 15px;
   }
   input:focus {
    outline : none;
    border : 2px solid #DF2059;
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
    background-color : #DF2059;
    color : white;
   }
`;

export const SignupButton = styled.div`
    width : 100px;
    height : 100px;
    background-color : #DF2059;
    position : absolute;
    left : 59%;
    top : 28%;
    border-radius : 100px;
    color : white;
    font-family : bold;
    line-height : 100px;
    font-size : 18px;
    cursor : pointer;
    transition : 0.3s;
    :hover{
        width : 120px;
        height : 120px;
        text-align : center;
        line-height : 120px;
        font-size : 22px;
    }
`;