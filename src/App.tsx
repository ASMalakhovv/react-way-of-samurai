import React, {ComponentType} from 'react';
import './App.css';
import NavBar from "./Components/Navbar/Navbar";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from './Components/Dialods/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ContainerProfile from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./Redux/redux-store";
import {Preloader} from "./Components/common/Preloader/Preloader";
import {compose} from "redux";


type AppMstpType = {
    isInit: boolean
    isAuth: boolean
}
const mstp = (state: AppStateType): AppMstpType => {
    return {
        isInit: state.auth.isInit,
        isAuth: state.auth.isAuth
    }
}

function App(props: AppMstpType) {
    return (

        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar/>
            {!props.isInit
                ? <Preloader/>
                : <div className="app-wrapper-content">
                    <Route path="/message" component={DialogsContainer}/>
                    <Route exact path="/profile" component={ContainerProfile}/>
                    <Route path="/profile/:userId" component={ContainerProfile}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/login" component={Login}/>
                </div>
            }
        </div>

    );
}


export default compose<ComponentType>(connect(mstp))(App)
