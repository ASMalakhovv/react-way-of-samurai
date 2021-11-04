import React, {ChangeEvent} from "react";
import s from './AddMessage.module.css'
import {ActionType, addNewMessageActionCreator, updateNewMessageBodyActionCreate} from "../../../Redux/State";

type AddMessagePropsType = {
    dispatch: (action: ActionType) => void
    newMessageBody: string
}

export function AddMessage(props: AddMessagePropsType) {

    const onChangeTextAreaMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newValue = e.currentTarget.value
            props.dispatch(updateNewMessageBodyActionCreate(newValue))
    }
    const onClickButtonHandler = () => {
            props.dispatch(addNewMessageActionCreator())
    }
    return (<div className={s.addMessage}>
            <textarea value={props.newMessageBody} onChange={onChangeTextAreaMessage} />
            <button onClick={onClickButtonHandler}>go</button>
        </div>
    )
}
