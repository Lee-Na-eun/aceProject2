import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    title : '',
    content : '',
    username : '',
    boardId : 0
}

export const contentSlice = createSlice({
    name : 'detailContent',
    initialState,
    reducers: {
        saveContent: (state, action) => {
            state.title = action.payload.title
            state.content = action.payload.content
            state.username = action.payload.username
            state.boardId = action.payload.boardId
        },
    }
});

export const {saveContent} = contentSlice.actions;
export const contentStatus = (state) => state.detailContent;
export default contentSlice.reducer;