import React, {ComponentType} from 'react';
import './App.css';
import NavBar from "./Components/Navbar/Navbar";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from './Components/Dialods/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ContainerProfile from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./Redux/redux-store";
import {compose} from "redux";
import {initializedApp} from "./Redux/app-reducer";
import {Preloader} from "./Components/common/Preloader/Preloader";


type AppMstpType = {
    isAuth: boolean
    initialized: boolean
}

type AppMdtpType = {
    initializedApp: () => void
}

const mstp = (state: AppStateType): AppMstpType => {
    return {
        isAuth: state.auth.isAuth,
        initialized: state.app.initialized
    }
}


class App extends React.Component<AppMstpType & AppMdtpType> {

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path="/message" component={DialogsContainer}/>
                    <Route exact path="/profile" component={ContainerProfile}/>
                    <Route path="/profile/:userId" component={ContainerProfile}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/login" component={Login}/>
                </div>

            </div>

        );
    }
}


export default compose<ComponentType>
(
    connect<AppMstpType, AppMdtpType, {}, AppStateType>
    (mstp, {initializedApp})
)
(App)
