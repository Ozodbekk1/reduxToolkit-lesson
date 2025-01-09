import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false,
    loggedin:false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login
        loginUserStart: (state) => {
            state.isLoading = true;
        },
        loginUserSuccess: (state) => {},
        loginUserFailure: (state) => {},
        // register
        registerUserStart: (state) => {
            state.isLoading = true;
            },
            registerUserSuccess: (state) => {},
            registerUserFailure: (state) => {},
    },
})

export const {loginUserStart, registerUserStart} = authSlice.actions
export default authSlice.reducer; 