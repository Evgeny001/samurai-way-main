import * as React from "react";
import userPhoto from "../../assets/images/istockphoto-1337144146-612x612.jpeg";
import styles from "./user.module.css";
import {initialStateType} from "../../redux/usersReducer";

type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    usersPage: initialStateType
    onPageChanged: (pageNumber: number) => void
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
}

const Users:React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i<= pagesCount; i++ ){
        pages.push(i)
    }
    const renderPages = pages.map(el=> {
        return <span className={props.currentPage === el ? styles.selectedPage : ''}
                     onClick={()=>props.onPageChanged(el)}>{el}</span>} )
    return (
        <div>
            {renderPages}
            {props.usersPage.users.map(el => {
                    return<div>
                        <span><div><img src={el.photos.small  !== null ? el.photos.small :  userPhoto} alt='avatar' className={styles.userPhoto}/></div></span>
                        <span>{el.followed ?  <button onClick={()=>props.unFollowUser(el.id)}>Follow</button> :
                            <button onClick={()=>props.followUser(el.id)}>Unfollow</button>}</span>
                        <span><div>{el.name}</div><div>{el.status}</div></span>
                        <span><div>{'el.location.country'}</div><div>{'el.location.city'}</div></span>
                    </div>
                }
            )}
        </div>
    );
};

export default Users;
