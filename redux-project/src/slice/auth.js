import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false,
    loggedin:false,
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login
        loginUserStart: (state) => {
            state.isLoading = true;
        },
        loginUserSuccess: (state) => {
            state.isLoading = true;
            state.isLoading = false;
        },
        loginUserFailure: (state) => {
            state.isLoading = false;
            state.error = 'hatolik yuz berdi'
        },
        // register
        registerUserStart: (state) => {
            state.isLoading = true;
            },
            registerUserSuccess: (state) => {
                state.loggedin = true;
                state.isLoading = false;
            },
            registerUserFailure: (state) => {
                state.isLoading = false;
                state.error = 'Failed to register user';
            },
    },
})

export const {loginUserStart, registerUserStart, registerUserSuccess, registerUserFailure, loginUserSuccess, loginUserFailure} = authSlice.actions;
export default authSlice.reducer; 