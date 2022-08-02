import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface IUserState {
    isAuthenticated: Boolean,
    current: any,
}

const initialState: IUserState = {
    isAuthenticated: false,
    current: {},
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action) {
            state.current = action.payload;
            state.isAuthenticated = true;
        },

        logout(state) {
            state.current = {};
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
