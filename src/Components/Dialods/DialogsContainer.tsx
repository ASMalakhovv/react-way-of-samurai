import React from "react";
import {connect} from "react-redux";
import {addNewMessageActionCreator, updateNewMessageBodyActionCreate} from "../../Redux/dialogs-reducer";
import {AppStateType, RootReducerType} from "../../Redux/redux-store";
import {DialogsPageType, ActionType} from "../../Redux/Store";
import {StoreContext} from "../../StoreContext";
import {Dialogs} from "./Dialogs";


type DialogsContainerPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionType) => void
}
/*export function DialogsContainer(/!*props: DialogsContainerPropsType*!/) {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let dialogs = store.getState().dialogsPage.dialogs
                    let messages = store.getState().dialogsPage.messages
                    let newMessageBody = store.getState().dialogsPage.newMessageBody

                    const onChangeTextAreaMessage = (text: string) => {
                        store.dispatch(updateNewMessageBodyActionCreate(text))
                    }
                    const onClickButtonHandler = () => {
                        store.dispatch(addNewMessageActionCreator())
                    }
                    return <Dialogs dialogs={dialogs}
                                    messages={messages}
                                    newMessageBody={newMessageBody}
                                    onChangeTextAreaMessage={onChangeTextAreaMessage}
                                    onClickButtonHandler={onClickButtonHandler}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}*/

export const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}
export const mapDispatchToProps = (dispatch:(action:ActionType)=>void) => {
    return {
        onChangeTextAreaMessage: (text: string) => {dispatch(updateNewMessageBodyActionCreate(text));},
        onClickButtonHandler:()=>{dispatch(addNewMessageActionCreator());}
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)