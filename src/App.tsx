import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {AppRootStateType, StoreType} from "./redux/redux-store";
import {SuperDialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UserContainer} from "./components/Users/UserContainer";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {

    const state:AppRootStateType = props.store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>

            <Navbar friends={state.sidebar.friends}/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*" element={<SuperDialogsContainer  />}/>
                    <Route path='/users/' element={<UserContainer />}/>
                </Routes>

            </div>
        </div>

    );
}

export default App;
