import {AuthMe, AuthMeData, CommonLoginType} from "../types/entities";
import {AppThunk} from "./redux-store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


export enum AUTH_ME {
    SETUSER = "SET-USER-AUTH",
    INITSTATUS = "INIT-STATUS",
    LOGINAPPLICATION = "LOGIN-APPLICATION"
}


export type AuthActionType = ReturnType<typeof setUser> | ReturnType<typeof initStatus> | ReturnType<typeof loginApp>;

type AuthInitialState = typeof initialState

type InitialStateType = {
    isAuth: boolean
    isInit: boolean
    isLogin: boolean
}

let initialState: AuthMeData & InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isInit: false,
    isLogin: false
}


const authReducer = (state: AuthInitialState = initialState, action: AuthActionType): AuthInitialState => {
    switch (action.type) {
        case AUTH_ME.SETUSER:
            return {
                ...state,
                ...action.payload,
                isAuth: action.isAuth
            };
        case AUTH_ME.INITSTATUS:
            return {
                ...state,
                isInit: action.isInit
            };
        case AUTH_ME.LOGINAPPLICATION:
            return {
                ...state,
                isLogin: action.isLogin
            };
        default:
            return state;
    }
};


//AC
export const setUser = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: AUTH_ME.SETUSER,
        payload: {
            id,
            email,
            login
        },
        isAuth
    } as const;
};


export const initStatus = (isInit: boolean) => {
    return {
        type: AUTH_ME.INITSTATUS,
        isInit
    } as const
}

export const loginApp = (isLogin: boolean) => {
    return {
        type: AUTH_ME.LOGINAPPLICATION,
        isLogin
    } as const
}


//THUNK
export const authSetUser = (): AppThunk => async dispatch => {
    try {
        dispatch(initStatus(false))
        let data: AuthMe = await authAPI.getAuthMe()
        let {id, email, login} = data.data
        if (data.resultCode === 0) {
            if (id && email && login) {
                dispatch(setUser(id, email, login, true))
                dispatch(loginApp(true))
            }

        }
        dispatch(initStatus(true))
    } catch (e) {
        alert('не могу authSetUser')
    }
}

export const login = (email: string, password: string): AppThunk => async dispatch => {
    try {
        let res: CommonLoginType<{ userId: number }> = await authAPI.login(email, password)
        if (res.resultCode === 0) {
            dispatch(loginApp(true))
            dispatch(authSetUser())
        } else {
            let message = res.messages.length > 0 ? res.messages[0] : "Some Error"
            dispatch(stopSubmit('login', {_error: message}))
        }
    } catch (e) {
        alert(e)
    }
}

export const logout = (): AppThunk => async dispatch => {
    try {
        let res: number = await authAPI.logout()
        if (res === 0) {
            dispatch(loginApp(false))
            dispatch(setUser(null, null, null, false))
        }
    } catch (e) {
        alert('не могу залогиниться')
    }
}

export default authReducer;