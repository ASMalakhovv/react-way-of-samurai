import React from "react";
import {DialogItemType} from "../../Redux/dialogs-reducer";
import {SideBarType} from "../../Redux/sidebar-reducer";
import s from './Navbar.module.css'
import {NavBarItem} from "./NavBarItem/NavBarItem";
import {NavFriends} from "./NavFriends/NavFriends";

type NavBarPropsType = {
    state: SideBarType
    dialogsFriends: Array<DialogItemType>
}

function NavBar(props: NavBarPropsType) {
    const navBarItem = props.state.title.map(s => <NavBarItem id={s.id} item={s.item}/>)
    const navBarFriends = props.dialogsFriends.filter(f => f.id <= 3)
    const friendsBests = navBarFriends.map(f => <NavFriends img={f.img} name={f.name}/>)
    return (

        <nav className={s.nav}>
            <div className={s.navMain}>
                {navBarItem}
            </div>
            <div className={s.navFriends}>
                <div className={s.navAdditionally}>
                    <h1>{props.state.additionally}</h1>
                </div>
                <div className={s.navFriendsBests}>
                    {friendsBests}
                </div>
            </div>
        </nav>
    )
}

export default NavBar