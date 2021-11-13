import {combineReducers, createStore} from "redux";
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import { StoreType } from "./Store";

export type AppStateType = ReturnType<typeof reducers>
const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
});



export let store:StoreType = createStore(reducers);
