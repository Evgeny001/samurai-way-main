import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs, DialogsDataType} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

const dialogsData: DialogsDataType[] = [
    {id: 1, name: 'Dinich'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'}
]

export type MessagesDataType = {
    message: string
    id: number
}
const messagesData: MessagesDataType[] = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How is your IT-kamasutra?'},
    {id: 3, message: 'Yo'}
]

function App() {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*"
                           element={<Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                </Routes>
            </div>
        </div>

    );
}


export default App;
