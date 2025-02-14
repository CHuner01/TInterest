import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {TagType, TokensType, UserInfoType, UserType} from "../types";
import {fakeApi} from "../config";

export const tagsAPI = createApi({
    reducerPath: 'tagsAPI',
    baseQuery: fetchBaseQuery({
        //baseUrl: API_URL
    }),
    endpoints: (build) => ({
        getAllTags: build.query<TagType[], void>({
            query: () => ({
                url: fakeApi,
            })
        }),
        getUserTags: build.query<TagType[], void>({
            query: () => ({
                url: fakeApi,
            })
        }),
        editUserTags: build.mutation<TagType, TagType[]>({
            query: (newUserTags) => ({
                url: fakeApi,
                method: 'PUT',
                body: newUserTags
            })
        }),
        editAllTags: build.mutation<TagType, TagType[]>({
            query: (newTags) => ({
                url: fakeApi,
                method: 'PUT',
                body: newTags
            })
        })
    })
})