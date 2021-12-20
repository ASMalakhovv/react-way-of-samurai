import {connect} from "react-redux"
import {AppStateType} from "../../Redux/redux-store"
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC, UsersActionType} from "../../Redux/users-reducer"
import {UsersItemType} from "../../types/entities"
import UsersC from "./UsersС"


export type MapStateToProps = {
    users: Array<UsersItemType>
    pageSize: number
    totalCount: number
    currentPage: number
}

function mapStateToProps(state: AppStateType): MapStateToProps {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}


export type UsersPropsType = MapStateToProps & MapDispatchToPropsType


export type MapDispatchToPropsType = {
    onClickFollowHandler: (id: number) => void
    onClickUnFollowHandler: (id: number) => void
    onClickSetUsersHandler: (users: Array<UsersItemType>) => void
    onClickSetCurrentPage: (current: number) => void
}

function mapDispatchToProps(dispatch: (action: UsersActionType) => void): MapDispatchToPropsType {
    return {
        onClickFollowHandler: (id) => {
            dispatch(followAC(id))
        },
        onClickUnFollowHandler: (id) => {
            dispatch(unFollowAC(id))
        },
        onClickSetUsersHandler: (users) => {
            dispatch(setUsersAC(users))
        },
        onClickSetCurrentPage: (current) => {
            dispatch(setCurrentPageAC(current))
        },
    }
}

export const UsersContainer = connect<MapStateToProps, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersC)