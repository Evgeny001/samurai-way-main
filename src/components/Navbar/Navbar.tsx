// @ts-ignore
import React from "react";
import Classes from './Navbar.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import {Friends, FriendsPropsType} from "../Friends/Friends";

// let c1 = 'item'
// let c2 = 'active'
// let classes = c1 + ' ' + c2 //'item active'
let classesNew = `${Classes.item} ${Classes.active}`

export const Navbar = (props: FriendsPropsType) => {
    return (
        <nav className={Classes.nav}>
            <div className={Classes.item}>
                <div>
                    <NavLink to={'/profile'}
                             className={navData => navData.isActive ? Classes.activeLink : Classes.item}>Profile </NavLink>
                    {/*<a href={'/profile'}>Profile </a>*/}
                </div>
                <div>
                    <NavLink to='/dialogs'
                             className={navData => navData.isActive ? Classes.activeLink : Classes.item}
                    >Messages</NavLink>
                    {/*<a href='/dialogs'>Messages</a>*/}
                </div>
                <div>
                    <NavLink to='/users'>Users</NavLink>
                </div>
                <div>
                    <NavLink to='/new'
                             className={navData => navData.isActive ? Classes.activeLink : Classes.item}
                    >New</NavLink>
                    {/*<a href='/new'>New</a>*/}
                </div>
                <div>
                    <NavLink to='/music'
                             className={navData => navData.isActive ? Classes.activeLink : Classes.item}
                    >Music</NavLink>
                    {/*<a href='/music'>Music</a>*/}
                </div>
                <div>
                    <NavLink to='/settings'
                             className={navData => navData.isActive ? Classes.activeLink : Classes.item}
                    >Settings</NavLink>
                    {/*<a href='/settings'>Settings</a>*/}
                </div>
                <div>
                    <NavLink to={'/friends'}>
                        Friends
                    </NavLink>
                    <Routes>
                        <Route path={"/friends"} element={<Friends friends={props.friends}/>}/>
                    </Routes>

                </div>
            </div>
        </nav>
    )
}
