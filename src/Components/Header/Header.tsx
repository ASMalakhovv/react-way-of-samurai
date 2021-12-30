import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import logo from '../../assets/images/social-network.png'

type HeaderPropsType = {
    isAuth: boolean
    id: number | null
}

function Header(props: HeaderPropsType) {
    return (

        <header className={s.header}>
            <img
                src={logo}
                alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.id :
                    <NavLink to={"/login"}> Login </NavLink>
                }
            </div>

        </header>
    )
}

export default Header