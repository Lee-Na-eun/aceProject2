import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    boardId : undefined
}

export const saveBoardId = createSlice({
    name : 'detailModalOpen',
    initialState,
    reducers: {
        saveBoard : (state, action) => {
            state.boardId = action.payload.boardId
        }
    }
});

export const {saveBoard} = saveBoardId.actions;
export const saveBoardStatus = (state) => state.saveBoardId;
export default saveBoardId.reducer;