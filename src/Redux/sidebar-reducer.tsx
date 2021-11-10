import {SideBarType, ActionType} from "./Store";

let initialState = {
    title: [
        {id: "/profile", item: "Profile"},
        {id: "/message", item: "Messages"},
        {id: "/news", item: "News"},
        {id: "/music", item: "Music"},
        {id: "/settings", item: "Settings"},

    ],
    additionally: "Friends"
}

const sidebarReducer = (state: SideBarType = initialState, action: ActionType): SideBarType => {
    return state;
}

export default sidebarReducer;