import React, {ComponentType} from "react";
import Profile from "./Profile";
import {ProfileUser} from "../../types/entities";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getProfileUsers} from "../../Redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapDispatchToPropsType = {
    getProfileUsers: (userID: string) => void
}
type MapStateToPropsType = {
    addressImage: string
    profileUser: ProfileUser
}
type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        userId ? getProfileUsers(userId) : getProfileUsers(String(this.props.profileUser.userId))
    }

    render() {
        return (
            <div>
                <Profile profileUsers={this.props.profileUser}/>
            </div>
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        addressImage: state.profilePage.addressImage,
        profileUser: state.profilePage.profileUser
    }
}


export default compose<ComponentType>
(
    withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getProfileUsers}),
    withRouter
)
(ProfileContainer)