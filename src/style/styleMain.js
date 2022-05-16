import styled from "styled-components";


export const ContentListWrap = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100vw;
    height : 100vh;
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
                > button:hover{
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