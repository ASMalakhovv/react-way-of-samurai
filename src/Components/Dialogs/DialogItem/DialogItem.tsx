import React from "react";
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css'


type DialogItemType = {
    name: string
    id: number
    img:string
}

export function DialogItem(props: DialogItemType) {
    let path = "/message/" + props.id
    return (
        <div className={s.dialogItem} key={props.id}>
            <img src={props.img}/>
            <NavLink activeClassName={s.active} to={path}> {props.name} </NavLink>
        </div>
    )
}
