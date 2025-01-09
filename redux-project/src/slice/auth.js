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
        loginUserStart: (state) => {
            state.isLoading = true;
        },
        loginUserSuccess: (state) => {},
        loginUserFailure: (state) => {},
    },
})

export const {loginUserStart} = authSlice.actions
export default authSlice.reducer; 