import {combineReducers, createStore} from "redux";
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
});
type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>


export let store = createStore(reducers);