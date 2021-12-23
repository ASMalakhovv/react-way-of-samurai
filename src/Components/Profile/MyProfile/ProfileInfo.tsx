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
        <div>
            <img className={s.img} src={"https://assets.bellator.com/andrey_koreshkov_1990/08/23_banner/original-1619507089.jpg"}
                 alt=""/>
            <div className={s.description}>
                <img src={props.profileUser.photos.large}/>
                ava+description
            </div>
        </div>
    )
}