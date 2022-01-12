import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer, {DialogsActionType} from './dialogs-reducer'
import profileReducer, {ProfileActionType} from './profile-reducer'
import sidebarReducer, {SideBarActionType} from './sidebar-reducer'
import {UsersActionType, usersReducer} from "./users-reducer";
import authReducer, {AuthActionType} from "./auth-reducer";
import {ThunkAction} from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'

export type AppStateType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});


export type AppAction = UsersActionType | AuthActionType | DialogsActionType | ProfileActionType | SideBarActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    AppAction>

export let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store