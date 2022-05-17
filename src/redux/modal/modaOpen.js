import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    detailModalOpen : false,
    insertModalOpen : false,
    editModalOpen : false
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
        editOpen : (state) => {
            state.editModalOpen = true
        },
        editClose : (state) => {
            state.editModalOpen = false
        }
    }
});

export const {detailClose, detailOpen, insertOpen, insertClose, editOpen, editClose} = modalOpen.actions;
export const modalDetailStatus = (state) => state.detailModal;
export default modalOpen.reducer;