import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    detailModalOpen : false,
    insertModalOpen : false
}

export const modalOpen = createSlice({
    name : 'detailModalOpen',
    initialState,
    reducers: {
        detailOpen: (state) => {
            state.detailModalOpen = true
        },
        detailClose: (state) => {
            state.detailModalOpen = false
        },
        insertOpen: (state) => {
            state.insertModalOpen = true
        },
    }
});

export const {detailClose, detailOpen} = modalOpen.actions;
export const modalDetail = (state) => state.detailModal;
export default modalOpen.reducer;