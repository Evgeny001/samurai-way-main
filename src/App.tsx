import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {AppRootStateType, StoreType} from "./redux/redux-store";
import {SuperDialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UserContainer} from "./components/Users/UserContainer";
import { ProfileContainerC} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";



type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {

    const state:AppRootStateType = props.store.getState()

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>

            <Navbar friends={state.sidebar.friends}/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile/:userId?" element={<ProfileContainerC/>}/>
                    <Route path="/dialogs/*" element={<SuperDialogsContainer  />}/>
                    <Route path='/users/' element={<UserContainer />}/>
                    <Route path='/login/*' element={<Login/>}/>
                </Routes>

            </div>
        </div>

    );
}

export default App;
