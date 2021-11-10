import {ActionType, DialogsPageType} from "./Store";


const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
export type DialogsActionType =
    | ReturnType<typeof addNewMessageActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreate>;

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Andrew",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSR4Cpu6bJCTK6-7ffqpAS-kojHGxKMiJPw&usqp=CAU"
        },
        {
            id: 2,
            name: "Dmitry",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoHS8XI7wztGL0dfquA9UIPjW9PDKCPZ2wA&usqp=CAU"
        },
        {
            id: 3,
            name: "Sasha",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxi6qu8OUSnLlE1BQhdTQn8M5eJMs9sNRvA&usqp=CAU"
        },
        {
            id: 4,
            name: "Sveta",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6jRNS2_D9zbiR1EoAcKUE6goQWy3GlFJYQ&usqp=CAU"
        },
        {
            id: 5,
            name: "Valera",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkWSkQV9ae0HZ_yOHmCZ7ZD1nnu-LqMP9vA&usqp=CAU"
        },
        {
            id: 6,
            name: "Viktor",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQGkx_9jSYDff6SAGbW670JIvNGwq40XDIQ&usqp=CAU"
        },
        {
            id: 7,
            name: "Marina",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPwJzIsM4w_isvSQchgA1JnY4Vrpl_uyq4Q&usqp=CAU"
        }
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "YO"},
        {id: 4, message: "YO"},
        {id: 5, message: "YO"},
        {id: 6, message: "YO"},
        {id: 7, message: "YO"},
    ],
    newMessageBody: ""
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    debugger
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