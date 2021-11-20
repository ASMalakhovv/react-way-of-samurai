import profileReducer, { ProfileActionType } from "./profile-reducer"
import dialogsReducer, { DialogsActionType } from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"

type DialogsType = Array<DialogItemType>
type DialogItemType = {
    id: number
    name: string
    img: string
}
type MessagesType = Array<MessageItemType>
type MessageItemType = {
    id: number
    message: string
}
type PostsType = Array<PostsTypeObject>
type PostsTypeObject = {
    id: number
    message: string
    like: number
}
type DialogsPageType = {
    dialogs: DialogsType
    messages: MessagesType
    newMessageBody: string
}
type ProfilePageType = {
    newPostText: string
    posts: PostsType
    addressImage: string
}
type SideBarType = {
    title: Array<TitleBarType>
    additionally: string
}
type TitleBarType = {
    id: string
    item: string
}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SideBarType
};
export type ActionType = DialogsActionType | ProfileActionType
export type StoreType = {
    _state: StateType

    //методы изменения стейта
    dispatch: (action: ActionType) => void

    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
}


export let store: StoreType = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            newPostText: "",
            posts: [
                {id: 1, message: "Hi, how are you", like: 15},
                {id: 2, message: "It's my first post", like: 10}
            ],
            addressImage: "https://assets.bellator.com/andrey_koreshkov_1990/08/23_banner/original-1619507089.jpg"
        },
        sidebar: {
            title: [
                {id: "/profile", item: "Profile"},
                {id: "/message", item: "Messages"},
                {id: "/news", item: "News"},
                {id: "/music", item: "Music"},
                {id: "/settings", item: "Settings"},

            ],
            additionally: "Friends"
        }
    },
    _onChange() {
        console.log('store changed')
    },

    //методы изменения стейта
    dispatch(action) {
        // @ts-ignore
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        // @ts-ignore
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        // @ts-ignore
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);
        this._onChange()
    },


    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    }

};

export default store;



