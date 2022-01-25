import React from "react";
import Profile from "./Profile";
import {ProfileUser} from "../../types/entities";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getProfileUsers} from "../../Redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
        this.props.getProfileUsers(userId)
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


const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default withAuthRedirect(connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {getProfileUsers})(WithUrlDataContainerComponent))