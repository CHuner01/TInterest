import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {fakeApi} from "../../shared/config";
import {UserInfoType} from "../../shared/types";
export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        //baseUrl: API_URL
    }),
    endpoints: (build) => ({
        getUserInfo: build.query<UserInfoType, number>({
            query: (id) => ({
                url: "/users/" + id.toString(),
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