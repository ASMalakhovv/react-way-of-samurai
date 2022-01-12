import {AuthMe, AuthMeData} from "../types/entities";
import {AppThunk} from "./redux-store";
import {headerAPI} from "../api/api";
import {AxiosResponse} from "axios";

export enum AUTH_ME {
    SETUSERS = "SET-USERS-AUTH",

}


export type AuthActionType =
    | ReturnType<typeof setUser>;

type AuthInitialState = typeof initialState

type InitialStateType = {
    isAuth: boolean
}

let initialState: AuthMeData & InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state: AuthInitialState = initialState, action: AuthActionType): AuthInitialState => {
    switch (action.type) {
        case AUTH_ME.SETUSERS:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
};
export const setUser = (id: number, email: string, login: string) => {
    return {
        type: AUTH_ME.SETUSERS,
        data: {
            id,
            email,
            login
        }
    } as const;
};


export const authSetUser = (): AppThunk => async dispatch => {
    try {
        let data: AuthMe = await headerAPI.getAuthMe()
        let {id, email, login} = data.data
        if (data.resultCode === 0) {
            if (id && email && login) {
                dispatch(setUser(id, email, login))
            }
        }
    } catch (e) {

    }
}

export default authReducer;