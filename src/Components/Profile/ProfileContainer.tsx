import React from "react";
import {ProfileInfo} from "./MyProfile/ProfileInfo";
import {MyPostsContainer} from "./Posts/My_posts/My_postsContainer";



function Profile() {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>

        </div>
    )
}

export default Profile