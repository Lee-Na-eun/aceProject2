import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isNavOpen : false
}

export const navOpen = createSlice({
    name : 'navOpen',
    initialState,
    reducers: {
        open: (state) => {
            state.isNavOpen = true
        },
        close: (state) => {
            state.isNavOpen = false
        }
    }
});

export const {open, close} = navOpen.actions;
export const navStatus = (state) => state.navOpen;
export default navOpen.reducer;