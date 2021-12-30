import {AuthMeData} from "../types/entities";

export enum AUTH_ME {
    SETUSERS = "SET-USERS-AUTH",

}


export type AuthActionType =
    | ReturnType<typeof authSetUser>;

type AuthInitialState = typeof initialState

type InitialStateType = {
    isAuth:boolean
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
export const authSetUser = (id: number, email: string, login: string) => {
    return {
        type: AUTH_ME.SETUSERS,
        data: {
            id,
            email,
            login
        }
    } as const;
};

export default authReducer;