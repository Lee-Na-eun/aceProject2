import styled from "styled-components";


export const ContentAllBox = styled.div`
    > .pagingBtn {
        display : flex;
        width : 1000px;
        justify-content : center;
        margin : 0 auto;
        > button {
            border : 2px solid #FF4F83;
            width : 30px;
            height : 30px;
            margin-left : 15px;
            background-color : white;
            color : #FF4F83;
            border-radius : 5px;
            cursor : pointer;
        }
        > .nextBtn {
            display : inline-block;
            width : 30px;
            font-size : 24px;
            color : #FF4F83;
            margin-left : 10px;
            cursor : pointer;
        }
    }
`;

export const ContentListWrap = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100vw;
    height : 90vh;
    flex-direction: column;
    margin-bottom : 10px;
    > .searchWrap {
        width : 800px;
        padding : 20px 0;
        > input {
            width : 400px;
            height : 30px;
            border : 2px solid #FF4F83;
            padding-left : 10px;
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
            cursor : pointer;
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
                > span {
                    display : block;
                    width : 450px;
                    height : 30px;
                    margin : 0 auto;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    line-height : 30px;
                }
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