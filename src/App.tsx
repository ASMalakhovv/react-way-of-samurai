import React from 'react';
import './App.css';
import NavBar from "./Components/Navbar/Navbar";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import {Route} from "react-router-dom";
import {DialogsContainer} from './Components/Dialods/DialogsContainer';
import {UsersContainer} from './Components/Users/UsersContainer';
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";



function App() {
    return (

        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar />
            <div className="app-wrapper-content">
                <Route path="/message" component={DialogsContainer}/>
                <Route path="/profile/:userId" component={ProfileContainer}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>


            </div>
        </div>

    );
}

export default App;
