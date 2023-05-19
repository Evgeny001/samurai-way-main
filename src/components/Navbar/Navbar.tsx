// @ts-ignore
import React from "react";
import Classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

// let c1 = 'item'
// let c2 = 'active'
// let classes = c1 + ' ' + c2 //'item active'
let classesNew = `${Classes.item} ${Classes.active}`

export const Navbar = () => {
    return (
        <nav className={Classes.nav}>
            <div className={classesNew}>
                <div>
                    <NavLink to={'/profile'}>Profile </NavLink>
                    {/*<a href={'/profile'}>Profile </a>*/}
                </div>
                <div>
                    {/*<NavLink to='/dialogs'>Messages</NavLink>*/}
                    <a href='/dialogs'>Messages</a>
                </div>
                <div>
                    {/*<NavLink to='/new'>New</NavLink>*/}
                    <a href='/new'>New</a>
                    </div>
                <div>
                    {/*<NavLink to='/music'>Music</NavLink>*/}
                    <a href='/music'>Music</a>
                </div>
                <div>
                    {/*<NavLink to='/settings'>Settings</NavLink>*/}
                    <a href='/settings'>Settings</a>
                </div>
            </div>
        </nav>
    )
}
