import {NavLink} from "react-router-dom";
import React from "react";
import s from './NavBarItem.module.css'
type NavBarItemType = {
    id:string
    item: string
}

export function NavBarItem(props:NavBarItemType) {
    return (
        <div className={s.item}>
            <NavLink activeClassName={s.activeLink} to={props.id}>{props.item}</NavLink>
        </div>
    )
}