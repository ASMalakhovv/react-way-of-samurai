import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {authSetUser} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component<HeaderContainerProps> {
    componentDidMount() {
        this.props.authSetUser()
    }

    render() {
        return <>
            <Header isAuth={this.props.isAuth} id={this.props.id}/>
        </>
    }
}

type HeaderContainerProps = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    isAuth: boolean
    id: number | null
}
type MapDispatchToPropsType = {
    authSetUser: () => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id
    }

}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {authSetUser})(HeaderContainer)