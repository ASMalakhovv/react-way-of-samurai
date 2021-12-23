import React from "react";
import s from './ProfileInfo.module.css'



export function ProfileInfo() {
    return (
        <div>
            <img className={s.img} src={"https://assets.bellator.com/andrey_koreshkov_1990/08/23_banner/original-1619507089.jpg"}
                 alt=""/>
            <div className={s.description}>
                ava+description
            </div>
        </div>
    )
}