export type TagType = {
    id: number,
    name: string,
    selected: boolean
}

export type UserInfoType = {
    id: number,
    name: string,
    city: string,
    position: string,
    // tags: string[],
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

export type ChatIconType = {
    id: number,
    name: string,
    text: string,
    time: string,
    user: boolean,
    unread: boolean
}

export type MessageType = {
    name: string,
    text: string,
    time: string
}