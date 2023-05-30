import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
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
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
             <div className={s.dialogsItems}>
                 <DialogItem name={'Dinich'} id={1}/>
                 <DialogItem name={'Andrey'} id={2}/>
                 <DialogItem name={'Sveta'} id={3}/>
                 <DialogItem name={'Sasha'} id={4}/>
                 <DialogItem name={'Victor'} id={5}/>
                 <DialogItem name={'Valera'} id={6}/>
             </div>
               <div className={s.message}>
                   <Message message={'Hello'}/>
                   <Message message={'How is your IT-kamasutra?'}/>
                   <Message message={'Yo'}/>
               </div>
            </div>

           



    );
};
