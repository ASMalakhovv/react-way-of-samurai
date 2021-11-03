import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./Posts/My_posts/My_posts";
import {ProfileInfo} from "./MyProfile/ProfileInfo";

import {ActionType, ProfilePageType} from "../../Redux/State";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch:(action:ActionType) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo addressImage={props.state.addressImage}/>
            <MyPosts posts={props.state.posts}
                     newPostText={props.state.newPostText}
                     dispatch={props.dispatch}


            />

        </div>
    )
}

export default Profile