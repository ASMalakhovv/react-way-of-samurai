import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {DialogsPageType} from "../../Redux/State";
import {AddMessage} from "./AddMessage/AddMessage";


type DialogsPropsType = {
    state: DialogsPageType
}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name}
                                                                     id={d.id}
                                                                     img={d.img}/>)
    const messagesElements = props.state.messages.map(m => <DialogMessage id={m.id}
        message={m.message}/>)



    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.addMessage}>
                <AddMessage />
            </div>
        </div>
    )
}