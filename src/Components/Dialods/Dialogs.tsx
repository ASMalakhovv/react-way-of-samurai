import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {DialogsPageType,ActionType, DialogsType, MessagesType} from "../../Redux/Store";
import {AddMessage} from "./AddMessage/AddMessage";


type DialogsPropsType = {
    dialogs: DialogsType
    messages: MessagesType
    newMessageBody: string
    onChangeTextAreaMessage: (text:string) => void
    onClickButtonHandler: () => void
}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name}
                                                                     id={d.id}
                                                                     img={d.img}/>)
    const messagesElements = props.messages.map(m => <DialogMessage id={m.id}
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
                <AddMessage
                    onChangeTextAreaMessage={props.onChangeTextAreaMessage}
                    onClickButtonHandler={props.onClickButtonHandler}
                    newMessageBody={props.newMessageBody}/>
            </div>
        </div>
    )
}