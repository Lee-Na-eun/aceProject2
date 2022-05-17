import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    detailModalOpen : false,
    insertModalOpen : false,
    editModalOpen : false,
    deleteModalOpen : false,
    logoutModalOpen : false
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
        },
        deleteOpen : (state) => {
            state.deleteModalOpen = true
        },
        deleteClose : (state) => {
            state.deleteModalOpen = false
        },
        logoutOpen : (state) => {
            state.logoutModalOpen = true
        },
        logoutClose : (state) => {
            state.logoutModalOpen = false
        }
    }
});

export const {detailClose, detailOpen, insertOpen, insertClose, editOpen, editClose, deleteClose, deleteOpen, logoutOpen, logoutClose} = modalOpen.actions;
export const modalDetailStatus = (state) => state.detailModal;
export default modalOpen.reducer;