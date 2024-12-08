import {UserInfoType} from "../../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authorizeUser} from "./ActionCreators";

interface UserState {
    user: UserInfoType | undefined;
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    user: undefined,
    isLoading: false,
    error: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(authorizeUser.fulfilled, (state) => {
                state.isLoading = false;
                state.error = '';
                console.log("авторизован")
            })
            .addCase(authorizeUser.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(authorizeUser.rejected, (state, action: PayloadAction<string | unknown>) => {
                state.isLoading = false;
                if (typeof action.payload === 'string') {
                    state.error = action.payload;
                } else {
                    state.error = "Произошла ошибка";
                }
            })
    },
})

export default userSlice.reducer;