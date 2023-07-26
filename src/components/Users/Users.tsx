import React from "react";
import { UserType} from "../../redux/usersReducer";
import styles from './user.module.css'
import {UsersPropsType} from "./UserContainer";


export const Users: React.FC<UsersPropsType> = (props) => {

                const users: Array<UserType> = [
                    {id: 1, followed: true, fullName: "Dmitry", status: "I'm a boss", photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg" ,
                        location: {city: "Minsk", country: "Belarus"}},
                    {id: 2, followed: false, fullName: "Sasha", status: "I'm a boss", photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg",
                        location: {city: "Moscow", country: "Russian"}},
                    {id: 3, followed: true, fullName: "Andrew", status: "I'm a boss",  photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg",
                        location: {city: "Kiev", country: "Ukraine"}}
                ]

  debugger
    if(props.usersPage.users.length === 0){
        props.setUsers(users)
    }
    
    debugger
    const renderUsers = props.usersPage.users.map(el => {
        return<div>
                <span><div><img src={el.photoUrl} alt='avatar' className={styles.userPhoto}/></div></span>
                <span>{el.followed ?  <button onClick={()=>props.unFollowUser(el.id)}>Follow</button> :
                    <button onClick={()=>props.followUser(el.id)}>Unfollow</button>}</span>
                <span><div>{el.fullName}</div><div>{el.status}</div></span>
                <span><div>{el.location.country}</div><div>{el.location.city}</div></span>
            </div>
        }
    )
    return (
        <div>
            {renderUsers}
        </div>
    );
};
