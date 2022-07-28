import {FollowDate, UsersItemType} from "../types/entities";
import {AppThunk} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utilits/object-helpers";

export enum USER_REDUCER_TYPE {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SETUSERS = "SET-USERS",
    SETCURRENTPAGE = "SET-CURRENT-PAGE",
    SETTOTALCOUNT = "SET-TOTAL-COUNT",
    TOGGLEISFETCHING = "TOGGLE-IS-FETCHING",
    TOGGLEFOLLOWINGPROGRESS = "TOGGLE-FOLLOWING-PROGRESS",
    SET_FILTER = "users/SET-FILTER"
}

export type FollowSuccess = ReturnType<typeof followSuccess>
export type UnFollowSuccess = ReturnType<typeof unFollowSuccess>
export type SetUsers = ReturnType<typeof setUsers>
export type SetCurrentPage = ReturnType<typeof setCurrentPage>
export type SetTotalCount = ReturnType<typeof setTotalCount>
export type ToggleIsFetching = ReturnType<typeof toggleIsFetching>
export type ToggleFollowingProgress = ReturnType<typeof toggleFollowingProgress>

export type UsersActionType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setFilter>

export type FilterUsers = {
    term: string
}
export type UsersInitialStateType = {
    items: Array<UsersItemType>
    currentPage: number
    pageSize: number
    totalCount: number
    error: string
    isFetching: boolean
    receivedForButton: false
    arrUserForButton: number[]
    filter: FilterUsers
}
let initialState: UsersInitialStateType = {
    items: [],
    pageSize: 10,
    currentPage: 1,
    totalCount: 0,
    error: 'null',
    isFetching: false,
    receivedForButton: false,
    arrUserForButton: [],
    filter: {
        term: ""
    },
}

export const usersReducer = (state: UsersInitialStateType = initialState, action: UsersActionType): UsersInitialStateType => {
    switch (action.type) {
        case USER_REDUCER_TYPE.SET_FILTER:
            return {...state, filter: action.payload}
        case USER_REDUCER_TYPE.FOLLOW:
            return {...state, items: updateObjectInArray(state.items, action.id, 'id', {followed: true})};
        case USER_REDUCER_TYPE.UNFOLLOW:
            return {...state, items: updateObjectInArray(state.items, action.id, 'id', {followed: false})};
        case USER_REDUCER_TYPE.SETUSERS:
            return {...state, items: [...action.users]};
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

//ACTION CREATOR

export const followSuccess = (id: number) => {
    return {
        type: USER_REDUCER_TYPE.FOLLOW,
        id
    } as const
};

export const unFollowSuccess = (id: number) => {
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
export const setFilter = (payload: FilterUsers) => {
    return {
        type: USER_REDUCER_TYPE.SET_FILTER,
        payload
    } as const
}

//THUNK-CREATOR

export const getUsers = (currentPage: number, pageSize: number, term: string): AppThunk<void> => async dispatch => {
    try {
        dispatch(toggleIsFetching(true))
        let res = await usersAPI.getUsers(currentPage, pageSize, "")
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(res.items))
        dispatch(setTotalCount(res.totalCount))

    } catch (e) {

    }
}

const followUnfollowFlow = async (userID: number, dispatch: Dispatch<UsersActionType>,
                                  actionCreator: (userID: number) => FollowSuccess | UnFollowSuccess,
                                  usersAPIMethod: (userID: number) => Promise<FollowDate>) => {

    dispatch(toggleFollowingProgress(true, userID))
    const result = await usersAPIMethod(userID)
    dispatch(toggleFollowingProgress(false, userID))
    if (result.resultCode === 0) {
        dispatch(actionCreator(userID))
    }

}

export const follow = (userID: number): AppThunk<void> => async dispatch => {
    followUnfollowFlow(userID, dispatch, followSuccess, usersAPI.followUser)
}

export const unFollow = (userID: number): AppThunk<void> => async dispatch => {
    followUnfollowFlow(userID, dispatch, unFollowSuccess, usersAPI.unFollowUser)
}
