import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import AppContainer from "./App";
import {store} from "./Redux/redux-store";
import {Provider} from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);








