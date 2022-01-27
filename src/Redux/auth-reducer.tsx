import {AuthMe, AuthMeData} from "../types/entities";
import {AppThunk} from "./redux-store";
import {authAPI} from "../api/api";


export enum AUTH_ME {
    SETUSER = "SET-USER-AUTH",
    INITSTATUS = "INIT-STATUS"
}


export type AuthActionType = ReturnType<typeof setUser> | ReturnType<typeof initStatus>;

type AuthInitialState = typeof initialState

type InitialStateType = {
    isAuth: boolean
    isInit: boolean
}

let initialState: AuthMeData & InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isInit: false
}


const authReducer = (state: AuthInitialState = initialState, action: AuthActionType): AuthInitialState => {
    switch (action.type) {
        case AUTH_ME.SETUSER:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case AUTH_ME.INITSTATUS:
            return {
                ...state,
                isInit: action.isInit
            }
        default:
            return state;
    }
};
export const setUser = (id: number, email: string, login: string) => {
    return {
        type: AUTH_ME.SETUSER,
        data: {
            id,
            email,
            login
        }
    } as const;
};


export const initStatus = (isInit: boolean) => {
    return {
        type: AUTH_ME.INITSTATUS,
        isInit
    } as const
}

export const authSetUser = (): AppThunk => async dispatch => {
    try {
        dispatch(initStatus(false))
        let data: AuthMe = await authAPI.getAuthMe()
        let {id, email, login} = data.data
        if (data.resultCode === 0) {
            if (id && email && login) {
                dispatch(setUser(id, email, login))

            }
        }
        dispatch(initStatus(true))
    } catch (e) {
        dispatch(initStatus(true))
    }
}

export default authReducer;