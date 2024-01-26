// @ts-ignore
import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Navigate} from "react-router-dom";





export const Dialogs = (props: DialogsPropsType) => {
    const onSendMessageClickHandler = () =>{
        props.sendMessage()
    }
    const onMessageChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(event.currentTarget.value)
    }
    const dialogItemElements = props.state.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    const messageElements = props.state.messagesData.map(el => <Message message={el.message}/>)
    const newMessageBody = props.state.newMessageBody
     // alert(props.isAuth)
    if (props.isAuth === false) return <Navigate to='/login'/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItemElements}
            </div>
            <div className={s.message}>
                {messageElements}
            </div>
            <div>
                <textarea value={newMessageBody} onChange={onMessageChangeHandler}></textarea>
                <button onClick={onSendMessageClickHandler}>Send</button>
            </div>
        </div>
    );
};
