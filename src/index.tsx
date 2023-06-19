import React from 'react';
import './index.css';

import {rerenderEntireTree} from "./render";
import {state} from "./redux/state";

// ReactDOM.render(
//     <BrowserRouter>
//         <App appState={state} addPost={addPost}   />
//     </BrowserRouter>,
//     document.getElementById('root')
// );
rerenderEntireTree(state)
