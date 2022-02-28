import {AppStateType} from "./redux-store";
import {UsersItemType} from "../types/entities";

export const getUsersS = (state: AppStateType): Array<UsersItemType> => {
    return state.usersPage.items
}
export const getPageSizeS = (state: AppStateType): number => {
    return state.usersPage.pageSize
}
export const getTotalCountS = (state: AppStateType): number => {
    return state.usersPage.totalCount
}
export const getCurrentPageS = (state: AppStateType): number => {
    return state.usersPage.currentPage
}
export const getIsFetchingS = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}
export const getReceivedForButtonS = (state: AppStateType): boolean => {
    return state.usersPage.receivedForButton
}
export const getArrUserForButtonS = (state: AppStateType): number[] => {
    return state.usersPage.arrUserForButton
}