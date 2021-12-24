import React from "react";
import Profile from "./Profile";
import axios, {AxiosResponse} from "axios";
import {ProfileUser} from "../../types/entities";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {setProfileUser} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type MapDispatchToPropsType = {
    setProfileUser: (profileUsers: ProfileUser) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response: AxiosResponse<ProfileUser>) => {
                let profileUsers = response.data
                this.props.setProfileUser(profileUsers)
            })
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
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    setProfileUser
})(WithUrlDataContainerComponent)