// @ts-ignore
import React from "react";
import Classes from './Navbar.module.css'

// let c1 = 'item'
// let c2 = 'active'
// let classes = c1 + ' ' + c2 //'item active'
 let classesNew = `${Classes.item} ${Classes.active}`

export const Navbar = () => {
    return (
        <nav className= {Classes.nav}>
            <div className = {classesNew}>
                <div>  Profile</div>
            <div>Messages</div>
            <div>New</div>
            <div>Music</div>
            <div>Settings</div>
            </div>
        </nav>
    )
}
