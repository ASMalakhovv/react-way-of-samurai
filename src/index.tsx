import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import {store, StoreType} from "./Redux/State";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <HashRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
            />
        </HashRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)





