// @ts-ignore
import React from "react";
import Classes from './Navbar.module.css'

// let c1 = 'item'
// let c2 = 'active'
// let classes = c1 + ' ' + c2 //'item active'
let classesNew = `${Classes.item} ${Classes.active}`

export const Navbar = () => {
    return (
        <nav className={Classes.nav}>
            <div className={classesNew}>
                <div>
                    <a href='/profile'>Profile </a>
                </div>
                <div>
                    <a href='/dialogs'>Messages</a>
                </div>
                <div>
                    <a href='/new'>New</a>
                    </div>
                <div>
                    <a href='/music'>Music</a>
                </div>
                <div>
                    <a href='/settings'>Settings</a>
                </div>
            </div>
        </nav>
    )
}
