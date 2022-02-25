import {AppThunk} from "./redux-store";


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


const appReducer = (state: AppInitialStateType = initialState, action: AppActionType): AppInitialStateType => {
    switch (action.type) {
        case APP.INITIALIZEDSUCCESS:
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
export const initializedApp = (): AppThunk => async dispatch => {
    try {


    } catch (e) {
        alert('не могу authSetUser')
    }
}


export default appReducer;