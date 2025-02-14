import {BaseQueryArg, createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL, fakeApi} from "../../shared/config";
import UserList from "./index";
import {MessageType, UserInfoType} from "../../shared/types";

export const chatAPI = createApi({
    reducerPath: 'chatAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: (build) => ({
        getMessages: build.query<MessageType[], number>({
            query: (id) => ({
                url: "/users/all"
            })
        })
    })
})