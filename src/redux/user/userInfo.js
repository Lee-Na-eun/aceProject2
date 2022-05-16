import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    userToken : ''
}

export const userInfoSlice = createSlice({
    name : 'userInfo',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userToken = action.payload.userToken
        },
        logout: (state) => {
            state.userToken = ''
        }
    }
});

export const {login, logout} = userInfoSlice.actions;
export const userInfoStatus = (state) => state.userInfo;
export default userInfoSlice.reducer;