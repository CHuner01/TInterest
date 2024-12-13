export type TagType = {
    id: number,
    name: string,
    selected: boolean
}

export type UserInfoType = {
    id: string,
    name: string,
    bio: string
}

export type UserType = {
    email: string,
    password: string
}

export type TokensType = {
    accessToken: string,
    refreshToken: string
}