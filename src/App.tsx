import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/Navbar";
import {Dialogs} from "./Components/Dialods/Dialogs";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Settings} from "./Components/Settings/Settings";
import Profile from "./Components/Profile/Profile";
import {addPosts, updateNewPostText, StateType} from "./Redux/State";
import {Route} from "react-router-dom";

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    return (

            <div className="app-wrapper">
                <Header/>
                <NavBar state={props.state.sidebar}
                        dialogsFriends={props.state.dialogsPage.dialogs}/>
                <div className="app-wrapper-content">
                    <Route render={() => <Dialogs state={props.state.dialogsPage}/>} path="/message"
                    />
                    <Route render={() => <Profile state={props.state.profilePage}
                                                  addPosts={addPosts}
                                                  updateNewPostText={updateNewPostText}
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
