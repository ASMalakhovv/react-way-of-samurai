import React from "react";
import Header from "./Header";
import axios, {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {authSetUser} from "../../Redux/auth-reducer";
import {AuthMe} from "../../types/entities";


class HeaderContainer extends React.Component<HeaderContainerProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response: AxiosResponse<AuthMe>) => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    if (id !== null && email !== null && login !== null) {
                        this.props.authSetUser(id, email, login)
                    }
                }
            })
    }

    render() {
        return <>
            <Header isAuth={this.props.isAuth} id={this.props.id}/>
        </>
    }
}

type HeaderContainerProps = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    isAuth:boolean
    id:number|null
}
type MapDispatchToPropsType = {
    authSetUser: (id: number, email: string, login: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth,
        id:state.auth.id
    }

}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {authSetUser})(HeaderContainer)