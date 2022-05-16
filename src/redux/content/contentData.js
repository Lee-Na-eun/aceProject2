import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    contentData : []
};

export const contentDataSlice = createSlice({
    name : 'contentData',
    initialState,
    reducers: {
        saveContentData : (state, action) => {
            state.contentData = action.payload.contentData
        }
    }
});

export const {saveContentData} = contentDataSlice.actions;
export const contentDataStatus = (state) => state.contentData;
export default contentDataSlice.reducer;