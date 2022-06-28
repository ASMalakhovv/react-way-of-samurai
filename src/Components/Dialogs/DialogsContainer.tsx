import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {
    addNewMessage,
    DialogItemType,
    MessageItemType,
} from "../../Redux/dialogs-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType


export type MapStateToPropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageItemType>
    isAuth: boolean
}
export const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
    }
}


export type MapDispatchToPropsType = {
    addNewMessage: (text: string) => void
}


export default compose<ComponentType>(
    withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
    (mapStateToProps, {addNewMessage}))
(Dialogs)