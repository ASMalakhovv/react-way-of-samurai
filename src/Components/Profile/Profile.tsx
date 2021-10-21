import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./Posts/My_posts/My_posts";
import {ProfileInfo} from "./MyProfile/ProfileInfo";

import {ProfilePageType} from "../../Redux/State";

type ProfilePropsType = {
    state: ProfilePageType
    addPosts: () => void
    updateNewPostText:(changeValue:string) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo addressImage={props.state.addressImage}/>
            <MyPosts posts={props.state.posts}
                     addPosts={props.addPosts}
                     newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}

            />

        </div>
    )
}

export default Profile