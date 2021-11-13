import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Navbar";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {StateType, ActionType} from './Redux/Store'
import {StoreReduxType} from './Redux/redux-store';
import {DialogsContainer} from './Components/Dialods/DialogsContainer';

type AppPropsType = {
    state: StateType
    dispatch?: (action: ActionType) => void
}

function App(props: AppPropsType) {
    debugger
    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar state={props.state.sidebar}
                    dialogsFriends={props.state.dialogsPage.dialogs}/>
            <div className="app-wrapper-content">
                <Route render={() => <DialogsContainer/>} path="/message"/>
                <Route render={() => <Profile state={props.state.profilePage}/>} path="/profile"/>
                <Route component={News} path="/news"/>
                <Route component={Music} path="/music"/>
                <Route component={Settings} path="/settings"/>


            </div>
        </div>

    );
}

export default App;
