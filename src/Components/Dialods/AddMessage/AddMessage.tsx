import React from "react";
import s from './AddMessage.module.css'

export function AddMessage() {
    const inputRef = React.createRef<HTMLTextAreaElement>()

    const onClickButtonHandler = () => {
        const inputValue = inputRef.current?.value
        alert(inputValue)
    }
    return (<div className={s.addMessage}>
            <textarea ref={inputRef}/>
            <button onClick={onClickButtonHandler}>go</button>
        </div>
    )
}
