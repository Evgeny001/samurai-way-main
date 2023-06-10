import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Classes from './DialogItem.module.css'

type DialogItemPropsType = {
    name: string
    id: number
}
export const DialogItem = (props: DialogItemPropsType) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <span className={Classes.item}>
                <img
                    src='https://assets.survivalinternational.org/pictures/489/4116455578-1f8d781f66-b_article_column@2x.jpg' alt=""/>
                </span>
        <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
