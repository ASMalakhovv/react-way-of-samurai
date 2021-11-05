import {ActionType, DialogsPageType} from "./Store";


const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
export type DialogsActionType =
    | ReturnType<typeof addNewMessageActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreate>;

const dialogsReducer = (state: DialogsPageType, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let numberOfMessages = state.messages.length;
            let message = {id: numberOfMessages + 1, message: state.newMessageBody};
            state.newMessageBody = "";
            state.messages.push(message);
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.valueMessageBody;
            return state;
        default:
            return state;
    }
};
export const addNewMessageActionCreator = () => {
    return {
        type: ADD_NEW_MESSAGE,
    } as const;
};

export const updateNewMessageBodyActionCreate = (valueMessageBody: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        valueMessageBody: valueMessageBody
    } as const;
};

export default dialogsReducer;