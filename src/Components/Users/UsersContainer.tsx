import {connect} from "react-redux"
import {AppStateType} from "../../Redux/redux-store"
import {followAC, setUsersAC, unFollowAC, UsersActionType, UsersItem} from "../../Redux/users-reducer"
import {Users} from "./Users"


export type MapStateToProps = {
    users: Array<UsersItem>
}

function mapStateToProps(state: AppStateType): MapStateToProps {
    return {
        users: state.usersPage.users
    }
}

export type UsersPropsType = MapStateToProps & MapDispatchToPropsType


export type MapDispatchToPropsType = {
    onClickFollowHandler: (id: string) => void
    onClickUnFollowHandler: (id: string) => void
    onClickSetUsersHandler: (users: Array<UsersItem>) => void
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)