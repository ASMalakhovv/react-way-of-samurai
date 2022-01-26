import React from "react";
import {ProfileInfo} from "./MyProfile/ProfileInfo";
import MyPostsContainer from "./Posts/My_posts/My_postsContainer";
import {ProfileUser} from "../../types/entities";

export type ProfilePropsType = {
    profileUsers: ProfileUser
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profileUser={props.profileUsers}/>
            <MyPostsContainer/>

        </div>
    )
}

export default Profile