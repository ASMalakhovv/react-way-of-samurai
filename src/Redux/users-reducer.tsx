import {v1} from "uuid";
import {UsersItemType, UsersStateType} from "../types/entities";

export enum USER_REDUCER_TYPE {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SETUSERS = "SET-USERS",
    SETCURRENTPAGE = "SET-CURRENT-PAGE"
}


export type UsersActionType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>;


let initialState: UsersStateType = {
    items: [],
    pageSize: 5,
    currentPage: 2,
    totalCount: 30,
    error: 'null'
}

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionType): UsersStateType => {
    switch (action.type) {
        case USER_REDUCER_TYPE.FOLLOW:
            return {...state, "items": state.items.map(u => u.id === action.id ? {...u, followed: true} : u)};
        case USER_REDUCER_TYPE.UNFOLLOW:
            return {...state, "items": state.items.map(u => u.id === action.id ? {...u, followed: false} : u)};
        case USER_REDUCER_TYPE.SETUSERS:
            return {...state, "items": [...action.users]};
        case USER_REDUCER_TYPE.SETCURRENTPAGE:
            return {...state, currentPage: action.current}
        default:
            return state;
    }
}


export const followAC = (id: number) => {
    return {
        type: USER_REDUCER_TYPE.FOLLOW,
        id
    } as const
};
export const unFollowAC = (id: number) => {
    return {
        type: USER_REDUCER_TYPE.UNFOLLOW,
        id
    } as const
};

export const setUsersAC = (users: Array<UsersItemType>) => {
    return {
        type: USER_REDUCER_TYPE.SETUSERS,
        users
    } as const
};

export const setCurrentPageAC = (current: number) => {
    return {
        type: USER_REDUCER_TYPE.SETCURRENTPAGE,
        current,
    } as const
}