import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {TokensType, UserInfoType, UserType} from "../../shared/types";
import {fakeApi} from "../../shared/config";

export const registerAPI = createApi({
    reducerPath: 'registerAPI',
    baseQuery: fetchBaseQuery({
        //baseUrl: API_URL
    }),
    endpoints: (build) => ({
        authorizeUser: build.mutation<TokensType, UserInfoType>({
            query: (user) => ({
                url: fakeApi,
                method: 'POST',
                body: user
            })
        })
    })
})