import {v1} from "uuid";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS";
export type UsersActionType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>;

export type UsersStateType = typeof initialState
export type UsersItem = {
    id: string
    fullName: string
    followed: boolean
    status: string
    location: {
        city: string
        country: string
    }
}
export type PostsType = Array<PostsTypeObject>
export type PostsTypeObject = {
    id: number
    message: string
    like: number
}


let initialState = {
    users: [
        {
            id: v1(),
            fullName: "Aleksandr",
            followed: true,
            status: "I am happy",
            location: {city: "Omsk", country: "Russia"}
        },
        {
            id: v1(),
            fullName: "Dmitry",
            followed: true,
            status: "Hello world",
            location: {city: "Omsk", country: "Russia"}
        },
        {
            id: v1(),
            fullName: "Dimych",
            followed: true,
            status: "I am teacher",
            location: {city: "Minsk", country: "Belarus"}
        }
    ] as Array<UsersItem>
}

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionType): UsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)};
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)};
        case SETUSERS:
            return {...state, users: action.users};
        default:
            return state;
    }
}


export const followAC = (id: string) => {
    return {
        type: FOLLOW,
        id
    } as const
}
export const unFollowAC = (id: string) => {
    return {
        type: UNFOLLOW,
        id
    } as const
};

export const setUsersAC = (users: Array<UsersItem>) => {
    return {
        type: SETUSERS,
        users
    } as const
};