import React, {ChangeEvent} from "react";
import s from './AddMessage.module.css'
import {ActionType} from "../../../Redux/Store";
import {addNewMessageActionCreator, updateNewMessageBodyActionCreate } from "../../../Redux/dialogs-reducer";

type AddMessagePropsType = {
    newMessageBody: string
    onChangeTextAreaMessage: (text:string) => void
    onClickButtonHandler: () => void
}

export function AddMessage(props: AddMessagePropsType) {

    const onChangeTextAreaMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newValue = e.currentTarget.value
        props.onChangeTextAreaMessage(newValue)
    }
    const onClickButtonHandler = () => {
        if (props.newMessageBody.trim()) {
            props.onClickButtonHandler()
        }
    }
    return (<div className={s.addMessage}>
            <textarea value={props.newMessageBody} onChange={onChangeTextAreaMessage} />
            <button onClick={onClickButtonHandler}>go</button>
        </div>
    )
}
