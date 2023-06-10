import React from 'react';
import {FriendsType} from "../../redux/state";
import Classes from "../Navbar/Navbar.module.css";

export type FriendsPropsType = {
    friends: FriendsType[]
}
export const Friends = (props: FriendsPropsType) => {
    return (
        <div className={Classes.nav}>
            {props.friends.map(el=>
                <span>{el.name}</span>
            )}
        </div>
    );
};
