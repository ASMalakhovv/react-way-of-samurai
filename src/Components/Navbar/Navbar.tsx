import React from "react";
import s from './Navbar.module.css'
import {NavBarItem} from "./NavBarItem/NavBarItem";
import {NavFriends} from "./NavFriends/NavFriends";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {SideBarType, TitleBarType} from "../../Redux/sidebar-reducer";
import {DialogItemType} from "../../Redux/dialogs-reducer";


function NavBar() {
    const navBarState = useSelector<AppStateType, SideBarType>(state => state.sidebar)
    const friendsState = useSelector<AppStateType, Array<DialogItemType>>(state=> state.dialogsPage.dialogs)
    const navBarItem = navBarState.title.map(s => <NavBarItem id={s.id} item={s.item}/>)
    const navBarFriends = friendsState.filter(f => f.id <= 3)
    const friendsBests = navBarFriends.map(f => <NavFriends img={f.img} name={f.name}/>)
    return (

        <nav className={s.nav}>
            <div className={s.navMain}>
                {navBarItem}
            </div>
            <div className={s.navFriends}>
                <div className={s.navAdditionally}>
                    <h1>{navBarState.additionally}</h1>
                </div>
                <div className={s.navFriendsBests}>
                    {friendsBests}
                </div>
            </div>
        </nav>
    )
}

export default NavBar