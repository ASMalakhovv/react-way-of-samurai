

export type SideBarType = {
    title: Array<TitleBarType>
    additionally: string
}
export type TitleBarType = {
    id: string
    item: string
}

let initialState = {
    title: [
        {id: "/profile", item: "Profile"},
        {id: "/message", item: "Messages"},
        {id: "/news", item: "News"},
        {id: "/music", item: "Music"},
        {id: "/settings", item: "Settings"},
        {id: "/users", item: "Users"}

    ],
    additionally: "Friends"
}

const sidebarReducer = (state: SideBarType = initialState, action: SideBarActionType): SideBarType => {
    return state;
}

export const sideBarAC = () => {
    return {
        type: "SIDE-BAR"
    }as const
}
export type SideBarActionType = ReturnType<typeof sideBarAC>

export default sidebarReducer;