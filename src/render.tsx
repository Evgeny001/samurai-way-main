import React from 'react'
import ReactDOM from "react-dom";
import {addPost, RootStateType, updateNewPostText} from "./redux/state";

import App from "./App";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
