import {v1} from "uuid";
import {UsersItemType, UsersStateType} from "../types/entities";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SET-USERS";
export type UsersActionType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>;



let initialState:UsersStateType = {
    items: [],
    totalCount: 30,
    error: 'null'
}

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionType): UsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, "items": state.items.map(u => u.id === action.id ? {...u, followed: true} : u)};
        case UNFOLLOW:
            return {...state, "items": state.items.map(u => u.id === action.id ? {...u, followed: false} : u)};
        case SETUSERS:
            return {...state, "items": [...action.users]};
        default:
            return state;
    }
}


export const followAC = (id: number) => {
    return {
        type: FOLLOW,
        id
    } as const
};
export const unFollowAC = (id: number) => {
    return {
        type: UNFOLLOW,
        id
    } as const
};

export const setUsersAC = (users: Array<UsersItemType>) => {
    return {
        type: SETUSERS,
        users
    } as const
};