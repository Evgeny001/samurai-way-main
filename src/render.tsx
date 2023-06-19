import React from 'react'
import ReactDOM from "react-dom";
import {addPost, RootStateType} from "./redux/state";

import App from "./App";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
