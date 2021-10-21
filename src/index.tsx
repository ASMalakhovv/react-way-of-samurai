import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import {state, StateType, subscribe} from "./Redux/State";

const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <HashRouter>
            <App state={state}/>
        </HashRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)





