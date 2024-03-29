import {connect} from "react-redux"
import {AppStateType} from "../../Redux/redux-store"
import {
    follow,
    getUsers,
    setCurrentPage,
    setUsers, unFollow,
} from "../../Redux/users-reducer"
import {UsersItemType} from "../../types/entities"
import React, {ComponentType} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getArrUserForButtonS,
    getCurrentPageS,
    getIsFetchingS,
    getPageSizeS,
    getReceivedForButtonS,
    getTotalCountS,
    getUsersS
} from "../../Redux/users-selector";


export type MapStateToProps = {
    users: Array<UsersItemType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    receivedForButton: boolean
    arrUserForButton: number[]
}


class UsersContainerComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        const {getUsers,currentPage,pageSize} = this.props
        getUsers(currentPage, pageSize, "")
    }

    changePageHandler = (current: number) => {
        const {setCurrentPage,getUsers,pageSize} = this.props
        setCurrentPage(current)
        getUsers(current, pageSize, "")
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
                receivedForButton={this.props.receivedForButton}
                arrUserForButton={this.props.arrUserForButton}
            />
        </>
    }
}


function mapStateToProps(state: AppStateType): MapStateToProps {
    return {
        users: getUsersS(state),
        pageSize: getPageSizeS(state),
        totalCount: getTotalCountS(state),
        currentPage: getCurrentPageS(state),
        isFetching: getIsFetchingS(state),
        receivedForButton: getReceivedForButtonS(state),
        arrUserForButton: getArrUserForButtonS(state)
    }
}


export type UsersPropsType = MapStateToProps & MapDispatchToPropsType


export type MapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersItemType>) => void
    setCurrentPage: (current: number) => void
    getUsers: (currentPage: number, pageSize: number, term: string) => void
}


export default compose<ComponentType>
(
    withAuthRedirect,
    connect<MapStateToProps, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        getUsers
    })
)(UsersContainerComponent)
