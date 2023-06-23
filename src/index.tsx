import React from 'react';
import './index.css';
import {addPost, state, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
subscribe(rerenderEntireTree)
rerenderEntireTree()
