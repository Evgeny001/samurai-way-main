import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";

import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {AppRootStateType, StoreType} from "./redux/redux-store";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
       debugger
    const state:AppRootStateType = props.store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>

            <Navbar friends={state.sidebar.friends}/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile profilePage={state.profilePage}
                                                             newPostText={state.profilePage.newPostText}
                                                             dispatch={props.store.dispatch.bind(props.store)}
                                                             store={props.store}/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}/>

                </Routes>

            </div>
        </div>

    );
}

export default App;
