import styled from "styled-components";

export const NavWrap = styled.div`
    > div {
        position : fixed;
        display : flex;
        width : 240px;
        left : -200px;
    }
`;

export const MenuButton = styled.div`
    height : 60px;
    width : 40px;
    font-size : 25px;
    margin-top : 20px;
    line-height : 60px;
    color : white;
    background-color : #FF4F83;
    border-radius : 0 10px 10px 0;
    cursor : pointer;
`;

export const MenuBody = styled.div`
    width : 200px;
    height : 100vh;
    background-color : #FF4F83;
    > ul {
        height : 100vh;
        margin : 0;
        padding: 0;
        display : flex;
        justify-content : center;
        align-items : center;
        flex-direction: column;
        > li {
            list-style : none;
            background-color: white;
            width : 120px;
            height : 50px;
            margin-top : 30px;
            border-radius : 10px;
            font-size : 12px;
            line-height : 50px;
            color : #FF4F83;
            cursor : pointer;
        }
    }
`;