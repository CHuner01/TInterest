import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {usersAPI} from "../widgets/user-list/usersApi";
import {authAPI} from "../pages/Authorization/authApi";
import {registerAPI} from "../pages/Registration/registerApi";
import {userAPI} from "../pages/Profile/userApi";
import {tagsAPI} from "./api/tagsApi";

const rootReducer = combineReducers({
    [usersAPI.reducerPath]: usersAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [registerAPI.reducerPath]: registerAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [tagsAPI.reducerPath]: tagsAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(usersAPI.middleware, authAPI.middleware, registerAPI.middleware,
                userAPI.middleware, tagsAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']