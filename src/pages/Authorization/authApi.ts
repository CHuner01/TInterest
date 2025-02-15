import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {TokensType, UserInfoType, UserType} from "../../shared/types";
import {API_URL, fakeApi} from "../../shared/config";

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: (build) => ({
        authorizeUser: build.mutation<TokensType, UserType>({
            query: (user) => ({
                url: "/auth/login",
                method: 'POST',
                body: user
            })
        })
    })
})