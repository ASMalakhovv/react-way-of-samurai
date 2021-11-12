import {combineReducers, createStore} from "redux";
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'

export type AppStateType = ReturnType<typeof reducers>
const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
});



export let store = createStore(reducers);
export type StoreReduxType = ReturnType<typeof createStore>