import {BaseQueryArg, createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL, fakeApi} from "../../shared/config";
import UserList from "./index";
import {UserInfoType} from "../../shared/types";

export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({
        //baseUrl: API_URL
    }),
    endpoints: (build) => ({
        getSameUsers: build.query<UserInfoType[], void>({
            query: () => ({
                url: fakeApi
            })
        })
    })
})

