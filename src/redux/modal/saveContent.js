import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    title : '',
    content : ''
}

export const contentSlice = createSlice({
    name : 'detailContent',
    initialState,
    reducers: {
        saveContent: (state, action) => {
            state.title = action.payload.title
            state.content = action.payload.content
        },
    }
});

export const {saveContent} = contentSlice.actions;
export const contentStatus = (state) => state.detailContent;
export default contentSlice.reducer;