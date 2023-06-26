import React, {ChangeEvent, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageActionCreator, StoreType, updateNewMessageBodyActionCreator,

} from "../../redux/state";

type DialogsPropsType = {
    store: StoreType
}
export const Dialogs = (props: DialogsPropsType) => {
    let state = props.store.getState().messagesPage
    const mapLink = useRef<HTMLTextAreaElement>(null)
    const onSendMessageClick = () =>{
           props.store.dispatch(sendMessageActionCreator() )
    }
    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(event.currentTarget.value))

    }
    const dialogItemElements = state.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    const messageElements = state.messagesData.map(el => <Message message={el.message}/>)
    const newMessageBody = state.newMessageBody
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItemElements}
            </div>
            <div className={s.message} onClick={()=>alert("Hey")}>
                {messageElements}
            </div>
            <div>
                <textarea ref={mapLink} value={newMessageBody} onChange={onMessageChange}></textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    );
};
