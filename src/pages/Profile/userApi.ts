import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {fakeApi} from "../../shared/config";
import {UserInfoType} from "../../shared/types";
export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        //baseUrl: API_URL
    }),
    endpoints: (build) => ({
        getUserInfo: build.query<UserInfoType, void>({
            query: () => ({
                url: fakeApi,
            })
        }),
        editUserInfo: build.mutation<UserInfoType, UserInfoType>({
            query: (newUserInfo) => ({
                url: fakeApi,
                method: 'PUT',
                body: newUserInfo
            })
        }),
    })
})