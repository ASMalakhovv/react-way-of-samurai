import {connect} from "react-redux"
import {AppStateType} from "../../Redux/redux-store"
import {followAC, setUsersAC, unFollowAC, UsersActionType, UsersItemType} from "../../Redux/users-reducer"
import {Users} from "./Users"


export type MapStateToProps = {
    users: Array<UsersItemType>
}
function mapStateToProps(state: AppStateType): MapStateToProps {
    return {
        users: state.usersPage.items
    }
}



export type UsersPropsType = MapStateToProps & MapDispatchToPropsType



export type MapDispatchToPropsType = {
    onClickFollowHandler: (id: number) => void
    onClickUnFollowHandler: (id: number) => void
    onClickSetUsersHandler: (users: Array<UsersItemType>) => void
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