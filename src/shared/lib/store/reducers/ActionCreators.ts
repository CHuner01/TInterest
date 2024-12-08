import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserInfoType, UserType} from "../../../types";
import axios from "axios";
import {apiAxios} from "../../../config";


export const authorizeUser = createAsyncThunk(
    'user/authUser',
    async (user: UserType, thunkAPI) => {
        try {
            const response = await apiAxios.post("/authenticate", {
                "email": user.email,
                "password": user.password
            });
            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue("Не правильная почта или пароль")
        }
    }
)