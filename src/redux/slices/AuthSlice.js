import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuth: false,
    },
    reducers: {
        loginUser: (state, action) => {
            state.isAuth = true;
        },
        logoutUser: (state, action) => {
            state.isAuth = false;
            state.user = null;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { loginUser, logoutUser, setUser } = AuthSlice.actions;
export default AuthSlice.reducer;