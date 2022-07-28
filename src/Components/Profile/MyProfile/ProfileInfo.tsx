import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {ProfileUser} from "../../../types/entities";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import userPhoto from '../../../assets/images/images.png'

type ProfileInfoProps = {
    profileUser: ProfileUser
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file:any) => void
}

export function ProfileInfo({profileUser, status, updateStatus, isOwner, savePhoto}: ProfileInfoProps) {

    if (!profileUser) {
        return <Preloader/>
    }

    const savePhotoHandler = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.img}>
            <div className={s.description}>
                <img src={profileUser.photos.large || userPhoto}/>
                ava+description
            </div>
            {!isOwner && <input type="file" onChange={savePhotoHandler}/>}
            <div>
                <ProfileStatus profileStatus={"This text"}
                               updateStatus={updateStatus}
                               status={status}/>
            </div>
        </div>
    )
}
