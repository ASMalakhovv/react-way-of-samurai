import React from "react";
import s from './AddMessage.module.css'
import {ActionType, addNewMessageActionCreator} from "../../../Redux/State";

type AddMessagePropsType = {
    dispatch: (action: ActionType) => void
}

export function AddMessage(props: AddMessagePropsType) {
    const inputRef = React.createRef<HTMLTextAreaElement>()

    const onClickButtonHandler = () => {
        const inputValue = inputRef.current?.value
        if (inputValue) {
            props.dispatch(addNewMessageActionCreator(inputValue))
        }
    }
    return (<div className={s.addMessage}>
            <textarea ref={inputRef}/>
            <button onClick={onClickButtonHandler}>go</button>
        </div>
    )
}
