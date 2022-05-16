import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    userToken : '',
    username : ''
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
        },
        saveUsername : (state, action) => {
            state.username = action.payload.username
        }
    }
});

export const {login, logout, saveUsername} = userInfoSlice.actions;
export const userInfoStatus = (state) => state.userInfo;
export default userInfoSlice.reducer;