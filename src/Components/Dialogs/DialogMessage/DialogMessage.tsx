import s from "./DialogMessage.module.css";
import React from "react";

type DialogMessageType = {
    message: string
    id:number
}

export function DialogMessage (props: DialogMessageType) {
    return (
        <div className={s.message} key={props.id}>
            {props.message}
        </div>
    )
}