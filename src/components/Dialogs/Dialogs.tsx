import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesDataType} from "../../index";

type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: MessagesDataType[]
}
export type DialogsDataType = {
    name: string
    id: number
}
export const Dialogs = (props: DialogsPropsType) => {
    const dialogItemElements = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    const messageElements = props.messagesData.map(el => <Message message={el.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItemElements}
            </div>
            <div className={s.message} onClick={()=>alert("Hey")}>
                {messageElements}
            </div>
        </div>
    );
};
