import React from "react";
import {ProfileInfo} from "./MyProfile/ProfileInfo";
import MyPostsContainer from "./Posts/My_posts/My_postsContainer";
import {ProfileUser} from "../../types/entities";

export type ProfilePropsType = {
    profileUsers: ProfileUser
    status:string
    updateStatus: (status:string) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profileUser={props.profileUsers}
                         updateStatus={props.updateStatus}
                         status={props.status}
            />
            <MyPostsContainer/>

        </div>
    )
}

export default Profile