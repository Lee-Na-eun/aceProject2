import styled from "styled-components";


export const ContentAllBox = styled.div`
    > button {
        border : 2px solid #FF4F83;
        width : 30px;
        height : 30px;
        margin-left : 15px;
        background-color : white;
        color : #FF4F83;
        border-radius : 5px;
        cursor : pointer;
        margin-top : 20px;
    }
`;

export const ContentListWrap = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100vw;
    height : 90vh;
    flex-direction: column;
    > .searchWrap {
        width : 800px;
        padding-bottom : 20px;
        > input {
            width : 400px;
            height : 30px;
            border : 2px solid #FF4F83;
        }
        > input:focus{
            outline : none;
        }
        > button {
            margin-left : 20px;
            height : 34px;
            width : 90px;
            border : none;
            font-size : 10px;
            background-color : #FF4F83;
            color : white;
        }
    }
`;

export const TableBox = styled.table`
    width : 1000px;
    border-collapse: collapse;
    > thead {
        height : 50px;
        background-color : #FF4F83;
        color : white;
    }
    > tbody{
        > tr {
            > td {
                padding: 20px;
                font-size : 14px;
                > button {
                    width : 90px;
                    height : 30px;
                    border : none;
                    border-radius : 10px;
                    background-color : #E4DDE1;
                    font-size : 11px;
                    cursor : pointer;
                    transition : 0.3s;
                }
                > button:hover:enabled{
                    background-color : #FFA4BF;
                    color : white;
                }
            }
        }
        > tr:nth-child(2n) {
            background-color : #F2F2F2;
        }
    }
`;