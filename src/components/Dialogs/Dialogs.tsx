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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={props.dialogsData[0].name} id={props.dialogsData[0].id}/>
                <DialogItem name={props.dialogsData[1].name} id={props.dialogsData[1].id}/>
                <DialogItem name={props.dialogsData[2].name} id={props.dialogsData[2].id}/>
                <DialogItem name={props.dialogsData[3].name} id={props.dialogsData[3].id}/>
                <DialogItem name={props.dialogsData[4].name} id={props.dialogsData[4].id}/>
                <DialogItem name={props.dialogsData[5].name} id={props.dialogsData[5].id}/>

            </div>
            <div className={s.message}>
                <Message message={props.messagesData[0].message}/>
                <Message message={props.messagesData[1].message}/>
                <Message message={props.messagesData[2].message}/>

            </div>
        </div>


    );
};
