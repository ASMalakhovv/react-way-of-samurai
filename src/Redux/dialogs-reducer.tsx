import {ActionType, DialogsPageType } from "./State";


const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

const dialogsReducer = (state: DialogsPageType, action: ActionType):DialogsPageType => {
    if (action.type === ADD_NEW_MESSAGE) {
        let numberOfMessages = state.messages.length
        let message = {id: numberOfMessages + 1, message: state.newMessageBody}
        state.newMessageBody = ""
        state.messages.push(message)
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY && (action.valueMessageBody || action.valueMessageBody === "")) {
        state.newMessageBody = action.valueMessageBody
    }
    return state
}

export default dialogsReducer;