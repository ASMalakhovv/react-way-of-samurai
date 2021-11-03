import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import {store, StoreType} from "./Redux/State";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <HashRouter>
            <App store={store}/>
        </HashRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)





