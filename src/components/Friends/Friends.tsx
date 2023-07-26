import React from 'react';
import Classes from "../Navbar/Navbar.module.css";
import {FriendsType} from "../../redux/sitebarReducer";

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
