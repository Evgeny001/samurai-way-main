import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs, DialogsDataType} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {MessagesDataType, PostsDataType} from "./index";

// export type MessagesDataType = {
//     message: string
//     id: number
// }
// export type PostsDataType = {
//     message: string
//     likes: number
//     id: number
// }
// const dialogsData: DialogsDataType[] = [
//     {id: 1, name: 'Dinich'},
//     {id: 2, name: 'Andrey'},
//     {id: 3, name: 'Sveta'},
//     {id: 4, name: 'Sasha'},
//     {id: 5, name: 'Victor'},
//     {id: 6, name: 'Valera'}
// ]
// const messagesData: MessagesDataType[] = [
//     {id: 1, message: 'Hello'},
//     {id: 2, message: 'How is your IT-kamasutra?'},
//     {id: 3, message: 'Yo'}
// ]
// const postsData: PostsDataType[] = [
//     {id: 1, message: 'Hi, how are you', likes: 15},
//     {id: 2, message: 'It is my first post', likes: 20}
// ]
type AppPropsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    postsData: PostsDataType[]
}
function App(props:AppPropsType) {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path="/profile" element={<Profile postsData={props.postsData}/>}/>
                    <Route path="/dialogs/*"
                           element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                </Routes>
            </div>
        </div>

    );
}

debugger
export default App;
