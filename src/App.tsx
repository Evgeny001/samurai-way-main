import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {StateType} from "./redux/state";
import {Dialogs} from "./components/Dialogs/Dialogs";




type AppPropsType = {
    appState: StateType
}
function App(props:AppPropsType) {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={props.appState.sidebar.friends}/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile profilePage={props.appState.profilePage}/>}/>
                    <Route path="/dialogs/*"
                           element={<Dialogs messagesPage={props.appState.messagesPage}/>}/>

                </Routes>
            </div>
        </div>

    );
}

debugger
export default App;
