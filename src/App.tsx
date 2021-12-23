import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Navbar";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {DialogsContainer} from './Components/Dialods/DialogsContainer';
import {UsersContainer} from './Components/Users/UsersContainer';



function App() {
    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar />
            <div className="app-wrapper-content">
                <Route path="/message" component={DialogsContainer}/>
                <Route path="/profile" render={() => <Profile />}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>


            </div>
        </div>

    );
}

export default App;
