import React from "react";
import {addNewMessageActionCreator, updateNewMessageBodyActionCreate } from "../../Redux/dialogs-reducer";
import {DialogsPageType, ActionType} from "../../Redux/Store";
import {Dialogs} from "./Dialogs";


type DialogsContainerPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionType) => void
}

export function DialogsContainer(props: DialogsContainerPropsType) {

    let dialogs = props.state.dialogs
    let messages = props.state.messages
    let newMessageBody = props.state.newMessageBody

    const onChangeTextAreaMessage = (text:string) => {
        props.dispatch(updateNewMessageBodyActionCreate(text))
    }
    const onClickButtonHandler = () => {
        props.dispatch(addNewMessageActionCreator())
    }

    return (
        <Dialogs dialogs={dialogs}
                 messages={messages}
                 newMessageBody={newMessageBody}
                 onChangeTextAreaMessage={onChangeTextAreaMessage}
                 onClickButtonHandler={onClickButtonHandler}
        />
    )
}