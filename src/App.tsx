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
import {DialogsContainer} from './Components/Dialods/DialogsContainer';
import {UsersContainer} from './Components/Users/UsersContainer';


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
                <Route path="/message" component={DialogsContainer}/>
                <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>


            </div>
        </div>

    );
}

export default App;
