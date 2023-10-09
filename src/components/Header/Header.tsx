import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string | null
}
export const Header: React.FC<PropsType>= (props) => {
    return(
        <header className= {classes.header}>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo-700x394.png"  alt="logo"/>

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
            <div>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}
