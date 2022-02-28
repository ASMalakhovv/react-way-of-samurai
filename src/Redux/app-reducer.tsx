import {AppThunk} from "./redux-store";
import {authSetUser} from "./auth-reducer";


export enum APP {
    INITIALIZEDSUCCESS = 'INITIALIZED-SUCCESS'
}


export type AppActionType =
    ReturnType<typeof initializedSuccess>;

type AppInitialStateType = {
    initialized: boolean
}

let initialState: AppInitialStateType = {
    initialized: false
}


export const appReducer = (state: AppInitialStateType = initialState, action: AppActionType): AppInitialStateType => {
    switch (action.type) {
        case APP.INITIALIZEDSUCCESS:
            debugger
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};


//AC
export const initializedSuccess = () => {
    return {
        type: APP.INITIALIZEDSUCCESS,
    } as const
}


//THUNK
export const initializedApp = (): AppThunk<void> => dispatch => {
    try {
        let promise = dispatch(authSetUser())
        promise.then(()=> dispatch(initializedSuccess()))

    } catch (e) {
        alert('не могу initializedApp')
    }
}


export default appReducer;