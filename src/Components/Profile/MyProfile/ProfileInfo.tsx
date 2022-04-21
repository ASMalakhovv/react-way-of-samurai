import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileUser} from "../../../types/entities";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

type ProfileInfoProps = {
    profileUser: ProfileUser
    status: string
    updateStatus: (status: string) => void
}

export function ProfileInfo({profileUser,status,updateStatus}: ProfileInfoProps) {

    if (!profileUser) {
        return <Preloader/>
    }
    return (
        <div className={s.img}>
            <div className={s.description}>
                <img src={profileUser.photos.large}/>
                ava+description
            </div>
            <div>
                <ProfileStatus profileStatus={"This text"}
                               updateStatus={updateStatus}
                               status={status}/>
            </div>
        </div>
    )
}