import React, {useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import { MessagesPageType} from "../../redux/state";

type DialogsPropsType = {
    messagesPage: MessagesPageType
}

export const Dialogs = (props: DialogsPropsType) => {
    const mapLink = useRef<HTMLTextAreaElement>(null)
    const addmessage = () =>{
        if(mapLink.current !== null){
            console.log(mapLink.current.value)
        }
    }
    const dialogItemElements = props.messagesPage.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    const messageElements = props.messagesPage.messagesData.map(el => <Message message={el.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItemElements}
            </div>
            <div className={s.message} onClick={()=>alert("Hey")}>
                {messageElements}
            </div>
            <div>
                <textarea ref={mapLink}></textarea>
                <button onClick={addmessage}>Add</button>
            </div>
        </div>
    );
};
