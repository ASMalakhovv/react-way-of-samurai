import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import {store} from "./Redux/redux-store";
import { Provider } from 'react-redux';
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App state={store.getState()}/>
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );




