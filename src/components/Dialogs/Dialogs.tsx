import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {MessagesDataType} from "../../App";

type DialogItemPropsType = {
    name: string
    id: number
}
type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: MessagesDataType[]
}
export type DialogsDataType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemPropsType) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
type MessagePropsType = {
    message: string
}
export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
export const Dialogs = (props: DialogsPropsType) => {
    const dialogItemElements = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    const messageElements = props.messagesData.map(el => <Message message={el.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItemElements}
            </div>
            <div className={s.message}>
                {messageElements}
            </div>
        </div>


    );
};
