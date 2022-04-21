import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {AddMessageData, AddMessageReduxForm} from "./AddMessage/AddMessage";
import {DialogsPropsType} from "./DialogsContainer";


export class Dialogs extends React.Component<DialogsPropsType> {


    render() {

        console.log('dialogs')
        const onSubmit = (data: AddMessageData) => {
            if (data.addMessage && data.addMessage.trim()) {
                this.props.addNewMessage(data.addMessage);
            } else {
                alert('Введите корректные данные')
            }
        }

        const dialogsElements = this.props.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>)
        const messagesElements = this.props.messages.map(m => <DialogMessage id={m.id} message={m.message}/>)

        return (
            <div className={s.dialogs}>
                <div>TEST</div>
                <div className={s.dialog}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div className={s.addMessage}>
                    <AddMessageReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        )
    }
}