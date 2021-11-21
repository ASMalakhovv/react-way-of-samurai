import {combineReducers, createStore} from "redux";
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import { usersReducer } from "./users-reducer";

export type AppStateType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});


export let store = createStore(rootReducer);

// @ts-ignore
window.store = store