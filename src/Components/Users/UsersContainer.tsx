import {connect} from "react-redux"
import {AppStateType} from "../../Redux/redux-store"
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unFollow,
} from "../../Redux/users-reducer"
import {UsersItemType, UsersStateType} from "../../types/entities"
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


export type MapStateToProps = {
    users: Array<UsersItemType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    receivedForButton: boolean
    arrUserForButton:number[]
}


class UsersContainerComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data: UsersStateType) => {
            this.props.toggleIsFetching(false)
            let users = data.items
            let totalCount = data.totalCount
            this.props.setUsers(users)
            this.props.setTotalCount(totalCount)
        })
    }

    changePageHandler = (current: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(current)
        usersAPI.getUsers(current, this.props.pageSize).then((data: UsersStateType) => {
            this.props.toggleIsFetching(false)
            let users = data.items
            this.props.setUsers(users)
        })
    }

    render() {
        return <>
            {/*<div>
                {this.props.isFetching && <Preloader/>}
            </div>*/}
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                changePageHandler={this.changePageHandler}
                users={this.props.users}
                onClickFollowHandler={this.props.follow}
                onClickUnFollowHandler={this.props.unFollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                receivedForButton={this.props.receivedForButton}
                arrUserForButton={this.props.arrUserForButton}
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
        isFetching: state.usersPage.isFetching,
        receivedForButton: state.usersPage.receivedForButton,
        arrUserForButton:state.usersPage.arrUserForButton
    }
}


export type UsersPropsType = MapStateToProps & MapDispatchToPropsType


export type MapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersItemType>) => void
    setCurrentPage: (current: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (receivedForButton: boolean,userID:number) => void
}

export const UsersContainer = connect<MapStateToProps, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalCount,
        toggleIsFetching,
        toggleFollowingProgress,

    })(UsersContainerComponent)