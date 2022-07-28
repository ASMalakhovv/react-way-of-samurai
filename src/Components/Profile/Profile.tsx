import React from "react";
import {ProfileInfo} from "./MyProfile/ProfileInfo";
import {ProfileUser} from "../../types/entities";
import MyPostsContainer from "./Posts/My_posts/My_postsContainer";


export type ProfilePropsType = {
    profileUsers: ProfileUser
    status:string
    updateStatus: (status:string) => void
    isOwner:boolean
    savePhoto: (file:any) => void
}


function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo profileUser={props.profileUsers}
                         updateStatus={props.updateStatus}
                         status={props.status}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer />

        </div>
    )
}

export default Profile
