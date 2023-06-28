import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {RootStateType} from "./redux/state";


export const rerenderEntireTree = () => {
    debugger
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(() => {
    rerenderEntireTree()
})
rerenderEntireTree();

// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })
// rerenderEntireTree(store.getState());
