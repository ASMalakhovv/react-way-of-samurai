import {UsersItemType} from "../types/entities";

export enum USER_REDUCER_TYPE {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SETUSERS = "SET-USERS",
    SETCURRENTPAGE = "SET-CURRENT-PAGE",
    SETTOTALCOUNT = "SET-TOTAL-COUNT",
    TOGGLEISFETCHING = "TOGGLE-IS-FETCHING",
    TOGGLEFOLLOWINGPROGRESS = "TOGGLE-FOLLOWING-PROGRESS",
}


export type UsersActionType =
    ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export type UsersInitialStateType = {
    items: Array<UsersItemType>
    currentPage: number
    pageSize: number
    totalCount: number
    error: string
    isFetching: boolean
    receivedForButton: false
    arrUserForButton: number[]
}
let initialState: UsersInitialStateType = {
    items: [],
    pageSize: 5,
    currentPage: 1,
    totalCount: 0,
    error: 'null',
    isFetching: false,
    receivedForButton: false,
    arrUserForButton: []

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
            return {...state, isFetching: action.isFetching};
        case USER_REDUCER_TYPE.TOGGLEFOLLOWINGPROGRESS:
            return {
                ...state, arrUserForButton:
                    action.receivedForButton ? [...state.arrUserForButton, action.userID]
                        : state.arrUserForButton.filter(id => id !== action.userID)
            }

        default:
            return state;
    }
}


export const follow = (id: number) => {
    return {
        type: USER_REDUCER_TYPE.FOLLOW,
        id
    } as const
};
export const unFollow = (id: number) => {
    return {
        type: USER_REDUCER_TYPE.UNFOLLOW,
        id
    } as const
};

export const setUsers = (users: Array<UsersItemType>) => {
    return {
        type: USER_REDUCER_TYPE.SETUSERS,
        users
    } as const
};

export const setCurrentPage = (current: number) => {
    return {
        type: USER_REDUCER_TYPE.SETCURRENTPAGE,
        current,
    } as const
}

export const setTotalCount = (totalCount: number) => {
    return {
        type: USER_REDUCER_TYPE.SETTOTALCOUNT,
        totalCount,
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: USER_REDUCER_TYPE.TOGGLEISFETCHING,
        isFetching
    } as const
}

export const toggleFollowingProgress = (receivedForButton: boolean, userID: number) => {
    return {
        type: USER_REDUCER_TYPE.TOGGLEFOLLOWINGPROGRESS,
        receivedForButton,
        userID
    } as const
}
