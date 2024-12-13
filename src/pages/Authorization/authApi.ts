import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {TokensType, UserInfoType, UserType} from "../../shared/types";
import {fakeApi} from "../../shared/config";

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        //baseUrl: API_URL
    }),
    endpoints: (build) => ({
        authorizeUser: build.mutation<TokensType, UserType>({
            query: (user) => ({
                url: fakeApi,
                method: 'POST',
                body: user
            })
        })
    })
})