import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {DialogsDataType} from "./components/Dialogs/Dialogs";

export type MessagesDataType = {
    message: string
    id: number
}
export type PostsDataType = {
    message: string
    likes: number
    id: number
}
const dialogsData: DialogsDataType[] = [
    {id: 1, name: 'Dinich'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'}
]
const messagesData: MessagesDataType[] = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How is your IT-kamasutra?'},
    {id: 3, message: 'Yo'}
]
const postsData: PostsDataType[] = [
    {id: 1, message: 'Hi, how are you', likes: 15},
    {id: 2, message: 'It is my first post', likes: 20}
]
ReactDOM.render(

    <BrowserRouter>
        <App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData} />
    </BrowserRouter>,
    document.getElementById('root')

);
