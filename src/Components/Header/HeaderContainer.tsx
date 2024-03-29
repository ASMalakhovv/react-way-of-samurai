import React, {ComponentType} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {logout} from "../../Redux/auth-reducer";
import {compose} from "redux";


class HeaderContainer extends React.Component<HeaderContainerProps> {

    render() {
        return <>
            <Header isAuth={this.props.isAuth} id={this.props.id} logout={this.props.logout}/>
        </>
    }
}

type HeaderContainerProps = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    isAuth: boolean
    id: number | null
}
type MapDispatchToPropsType = {
    logout: () => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id
    }

}

export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
    (mapStateToProps, {logout}))
(HeaderContainer)