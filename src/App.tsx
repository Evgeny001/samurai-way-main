// @ts-ignore
import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>


                    <BrowserRouter>
                        <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                    </Routes>
                        </div>
                        </BrowserRouter>
                </div>
       
    );
}


export default App;
