import React from "react";
import styles from './user.module.css'
import {UsersPropsType} from "./UserContainer";
import axios from "axios";
import {UserType} from "../../redux/usersReducer";
import userPhoto from '../../assets/images/istockphoto-1337144146-612x612.jpeg'


export type GetUsersResponseType = {
    error: string | null
    totalCount: number
    items: UserType[]
}



export const Users: React.FC<UsersPropsType> = (props) => {

                // const users: Array<UserType> = [
                //     {id: 1, followed: true, fullName: "Dmitry", status: "I'm a boss", photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg" ,
                //         location: {city: "Minsk", country: "Belarus"}},
                //     {id: 2, followed: false, fullName: "Sasha", status: "I'm a boss", photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg",
                //         location: {city: "Moscow", country: "Russian"}},
                //     {id: 3, followed: true, fullName: "Andrew", status: "I'm a boss",  photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg",
                //         location: {city: "Kiev", country: "Ukraine"}}
                // ]
    const getUsers = () => {
        if(props.usersPage.users.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                props.setUsers(response.data.items)})
        }
    }



    debugger
    const renderUsers = props.usersPage.users.map(el => {
        return<div>
                <span><div><img src={el.photos.small  !== null ? el.photos.small :  userPhoto} alt='avatar' className={styles.userPhoto}/></div></span>
                <span>{el.followed ?  <button onClick={()=>props.unFollowUser(el.id)}>Follow</button> :
                    <button onClick={()=>props.followUser(el.id)}>Unfollow</button>}</span>
                <span><div>{el.name}</div><div>{el.status}</div></span>
                    <span><div>{'el.location.country'}</div><div>{'el.location.city'}</div></span>
            </div>
        }
    )
    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {renderUsers}
        </div>
    );
};
