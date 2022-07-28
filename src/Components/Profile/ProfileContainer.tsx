import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getProfileUsers, getStatus, savePhoto, setStatus} from "../../Redux/profile-reducer";
import {ProfileUser} from "../../types/entities";


type MapDispatchToPropsType = {
    getProfileUsers: (userID: string) => void
    getStatus: (userId: string) => void
    setStatus: (status: string) => void
    savePhoto: (file: any) => void
}
type MapStateToPropsType = {
    addressImage: string
    profileUser: ProfileUser
    status: string
    authorizedId: number | null
}
type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.authorizedId)
        }
        this.props.getProfileUsers(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return (
            <div>
                <Profile
                    profileUsers={this.props.profileUser}
                    status={this.props.status}
                    updateStatus={this.props.setStatus}
                    isOwner={!!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}
                />
            </div>

        )
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        addressImage: state.profilePage.addressImage,
        profileUser: state.profilePage.profileUser,
        status: state.profilePage.status,
        authorizedId: state.auth.id
    }
}


export default compose<ComponentType>
(
    withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
    (mapStateToProps, {
        getProfileUsers,
        getStatus,
        setStatus,
        savePhoto,
    }),
    withRouter
)
(ProfileContainer)
