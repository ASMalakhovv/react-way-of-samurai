import {connect} from "react-redux"
import {AppStateType} from "../../Redux/redux-store"
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers, toggleIsFetching,
    unFollow,
} from "../../Redux/users-reducer"
import {UsersItemType, UsersStateType} from "../../types/entities"
import React from "react";
import axios, {AxiosResponse} from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials:true
        })
            .then((response: AxiosResponse<UsersStateType>) => {
                debugger
                this.props.toggleIsFetching(false)
                let users = response.data.items
                let totalCount = response.data.totalCount
                this.props.setUsers(users)
                this.props.setTotalCount(totalCount)
            })
    }

    changePageHandler = (current: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(current)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${current}&count=${this.props.pageSize}`,{
            withCredentials:true
        })
            .then((response: AxiosResponse<UsersStateType>) => {
                this.props.toggleIsFetching(false)
                let users = response.data.items
                this.props.setUsers(users)
            })
    }

    render() {
        return <>
            <div>
                {this.props.isFetching && <Preloader/>}
            </div>
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                changePageHandler={this.changePageHandler}
                users={this.props.users}
                onClickFollowHandler={this.props.follow}
                onClickUnFollowHandler={this.props.unFollow}
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
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersItemType>) => void
    setCurrentPage: (current: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export const UsersContainer = connect<MapStateToProps, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalCount,
        toggleIsFetching,
    })(UsersContainerComponent)