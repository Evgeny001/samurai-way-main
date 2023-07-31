import * as React from "react";    //import React from "react" 
import userPhoto from "../../assets/images/istockphoto-1337144146-612x612.jpeg";
import styles from "./user.module.css";
import {UsersPropsType} from "./UserContainer";
import axios from "axios";


type PropsType =  UsersPropsType

export class Users extends React.Component<PropsType> {
         componentDidMount() {
             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                 debugger
                 this.props.setUsers(response.data.items)})
         }

    render() {
        return (
            <div>
                {this.props.usersPage.users.map(el => {
                        return<div>
                            <span><div><img src={el.photos.small  !== null ? el.photos.small :  userPhoto} alt='avatar' className={styles.userPhoto}/></div></span>
                            <span>{el.followed ?  <button onClick={()=>this.props.unFollowUser(el.id)}>Follow</button> :
                                <button onClick={()=>this.props.followUser(el.id)}>Unfollow</button>}</span>
                            <span><div>{el.name}</div><div>{el.status}</div></span>
                            <span><div>{'el.location.country'}</div><div>{'el.location.city'}</div></span>
                        </div>
                    }
                )}
            </div>
        );
    };
    }
