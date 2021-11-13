import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./MyProfile/ProfileInfo";

import {ActionType, ProfilePageType} from "../../Redux/Store";
import {MyPostsContainer} from "./Posts/My_posts/My_postsContainer";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch?: (action: ActionType) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo addressImage={props.state.addressImage}/>
            <MyPostsContainer posts={props.state}
                              dispatch={props.dispatch}
            />

        </div>
    )
}

export default Profile