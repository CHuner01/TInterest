import {BaseQueryArg, createApi, EndpointBuilder, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {API_URL} from "../../config";

export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: (build) => ({
        fetchSameUsers: build.query({
            query: () => ({
                url: "/sameUsers"
            })
        })
    })
})