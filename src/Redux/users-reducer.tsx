import {UsersItemType} from "../types/entities";

export enum USER_REDUCER_TYPE {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SETUSERS = "SET-USERS",
    SETCURRENTPAGE = "SET-CURRENT-PAGE",
    SETTOTALCOUNT = "SET-TOTAL-COUNT",
    TOGGLEISFETCHING = "TOGGLE-IS-FETCHING",
}


export type UsersActionType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>

export type UsersInitialStateType = {
    items:Array<UsersItemType>
    currentPage:number
    pageSize:number
    totalCount:number
    error:string
    isFetching:boolean
}
let initialState: UsersInitialStateType = {
    items: [],
    pageSize: 5,
    currentPage: 1,
    totalCount: 0,
    error: 'null',
    isFetching:false,
}

export const usersReducer = (state: UsersInitialStateType = initialState, action: UsersActionType): UsersInitialStateType => {
    switch (action.type) {
        case USER_REDUCER_TYPE.FOLLOW:
            return {...state, "items": state.items.map(u => u.id === action.id ? {...u, followed: true} : u)};
        case USER_REDUCER_TYPE.UNFOLLOW:
            return {...state, "items": state.items.map(u => u.id === action.id ? {...u, followed: false} : u)};
        case USER_REDUCER_TYPE.SETUSERS:
            return {...state, "items": [...action.users]};
        case USER_REDUCER_TYPE.SETCURRENTPAGE:
            return {...state, currentPage: action.current};
        case USER_REDUCER_TYPE.SETTOTALCOUNT:
            return {...state, totalCount: action.totalCount};
        case USER_REDUCER_TYPE.TOGGLEISFETCHING:
            return {...state, isFetching:action.isFetching}
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

export const setTotalCountAC = (totalCount: number) => {
    return {
        type: USER_REDUCER_TYPE.SETTOTALCOUNT,
        totalCount,
    } as const
}

export const toggleIsFetchingAC = (isFetching:boolean) => {
  return {
      type: USER_REDUCER_TYPE.TOGGLEISFETCHING,
      isFetching
  } as const
}
