import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Navbar";
import {Dialogs} from "./Components/Dialods/Dialogs";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {StoreType} from './Redux/State'
type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    return (

            <div className="app-wrapper">
                <Header/>
                <NavBar state={props.store._state.sidebar}
                        dialogsFriends={props.store._state.dialogsPage.dialogs}/>
                <div className="app-wrapper-content">
                    <Route render={() => <Dialogs state={props.store._state.dialogsPage}/>} path="/message"
                    />
                    <Route render={() => <Profile state={props.store._state.profilePage}
                                                  addPosts={props.store.addPosts}
                                                  updateNewPostText={props.store.updateNewPostText}
                    />} path="/profile"
                    />
                    <Route component={News} path="/news"/>
                    <Route component={Music} path="/music"/>
                    <Route component={Settings} path="/settings"/>


                </div>
            </div>

    );
}

export default App;
