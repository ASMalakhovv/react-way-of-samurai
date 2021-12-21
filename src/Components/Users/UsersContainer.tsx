import {connect} from "react-redux"
import {AppStateType} from "../../Redux/redux-store"
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC, toggleIsFetchingAC,
    unFollowAC,
    UsersActionType
} from "../../Redux/users-reducer"
import {UsersItemType, UsersStateType} from "../../types/entities"
import React from "react";
import axios, {AxiosResponse} from "axios";
import {Users} from "./Users";
import preload from "../../assets/images/preload.svg"


export type MapStateToProps = {
    users: Array<UsersItemType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}


class UsersContainerComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<UsersStateType>) => {
                this.props.toggleIsFetching(false)
                let users = response.data.items
                let totalCount = response.data.totalCount
                this.props.onClickSetUsersHandler(users)
                this.props.onClickSetTotalCount(totalCount)
            })
    }

    changePageHandler = (current: number) => {
        this.props.toggleIsFetching(true)
        this.props.onClickSetCurrentPage(current)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${current}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<UsersStateType>) => {
                this.props.toggleIsFetching(false)
                let users = response.data.items
                this.props.onClickSetUsersHandler(users)
            })
    }

    render() {
        return <>
            <div>
                {this.props.isFetching && <img src={preload}/>}
            </div>
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                changePageHandler={this.changePageHandler}
                users={this.props.users}
                onClickFollowHandler={this.props.onClickFollowHandler}
                onClickUnFollowHandler={this.props.onClickUnFollowHandler}
            />
        </>
    }
}


function mapStateToProps(state: AppStateType): MapStateToProps {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export type UsersPropsType = MapStateToProps & MapDispatchToPropsType


export type MapDispatchToPropsType = {
    onClickFollowHandler: (id: number) => void
    onClickUnFollowHandler: (id: number) => void
    onClickSetUsersHandler: (users: Array<UsersItemType>) => void
    onClickSetCurrentPage: (current: number) => void
    onClickSetTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
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
        onClickSetTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export const UsersContainer = connect<MapStateToProps, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersContainerComponent)