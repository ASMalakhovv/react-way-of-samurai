import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {Redirect} from "react-router-dom";

export type MstpType = {
    isAuth: boolean
}

const mstp = (state: AppStateType): MstpType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MstpType) => {
        const {isAuth, ...restProps} = props
        return isAuth ? <Component {...restProps as T}/> : <Redirect to='/login'/>
    }

    return connect(mstp)(RedirectComponent)
}