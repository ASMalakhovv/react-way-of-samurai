import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileUser} from "../../../types/entities";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoProps = {
    profileUser:ProfileUser
}

export function ProfileInfo(props:ProfileInfoProps) {
    if (props.profileUser.aboutMe === "") {
        return <Preloader />
    }
    return (
        <div className={s.img}>
            <div className={s.description}>
                <img src={props.profileUser.photos.large}/>
                ava+description
            </div>
        </div>
    )
}