import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer, {DialogsActionType} from './dialogs-reducer'
import profileReducer, {ProfileActionType} from './profile-reducer'
import sidebarReducer, {SideBarActionType} from './sidebar-reducer'
import {UsersActionType, usersReducer} from "./users-reducer";
import authReducer, {AuthActionType} from "./auth-reducer";
import {ThunkAction} from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer, {AppActionType} from "./app-reducer";

export type AppStateType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


export type AppAction = UsersActionType | AuthActionType | DialogsActionType | ProfileActionType | SideBarActionType | AppActionType

export type AppThunk<ReturnType> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    AppAction>

export let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store