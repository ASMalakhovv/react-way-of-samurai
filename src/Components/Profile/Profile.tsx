import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./MyProfile/ProfileInfo";
import {MyPostsContainer} from "./Posts/My_posts/My_postsContainer";
import {ProfileActionType, ProfileStateType} from "../../Redux/profile-reducer";

type ProfilePropsType = {
    state: ProfileStateType
    dispatch?: (action: ProfileActionType) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo addressImage={props.state.addressImage}/>
            <MyPostsContainer/>

        </div>
    )
}

export default Profile