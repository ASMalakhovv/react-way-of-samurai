import React from "react";
import s from './ProfileInfo.module.css'

type ProfileInfoType = {
addressImage:string
}

export function ProfileInfo(props:ProfileInfoType) {
    return (
        <div>
            <img className={s.img} src={props.addressImage}
                 alt=""/>
            <div className={s.description}>
                ava+description
            </div>
        </div>
    )
}