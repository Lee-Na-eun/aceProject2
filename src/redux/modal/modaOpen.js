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
        insertClose: (state) => {
            state.insertModalOpen = false
        },
    }
});

export const {detailClose, detailOpen, insertOpen, insertClose} = modalOpen.actions;
export const modalDetailStatus = (state) => state.detailModal;
export default modalOpen.reducer;