import React from "react";
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


export function withAuthRedirect(Component: any) {
    const RedirectComponent = (props: MstpType) => {
        return props.isAuth ? <Component value={10} {...props}/> : <Redirect to='/login'/>
    }

    return connect(mstp)(RedirectComponent)
}