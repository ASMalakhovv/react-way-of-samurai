import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import {store} from "./Redux/redux-store";
import {MyContext} from './MyContext'
const rerenderEntireTree = () => {
    ReactDOM.render(
        <HashRouter>
            <MyContext.Provider value={store}>
                <App state={store.getState()}/>
            </MyContext.Provider>
        </HashRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)





