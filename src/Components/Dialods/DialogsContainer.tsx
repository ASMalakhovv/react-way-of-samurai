import React from "react";
import {connect} from "react-redux";
import {
    addNewMessageActionCreator,
    DialogItemType,
    DialogsActionType,
    MessageItemType,
    updateNewMessageBodyActionCreate
} from "../../Redux/dialogs-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType


export type MapStateToPropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
    newMessageBody: string
    isAuth: boolean
}
export const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
}


export type MapDispatchToPropsType = {
    onChangeTextAreaMessage: (text: string) => void
    onClickButtonHandler: () => void
}
export const mapDispatchToProps = (dispatch: (action: DialogsActionType) => void): MapDispatchToPropsType => {
    return {
        onChangeTextAreaMessage: (text: string) => {
            dispatch(updateNewMessageBodyActionCreate(text));
        },
        onClickButtonHandler: () => {
            dispatch(addNewMessageActionCreator());
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)