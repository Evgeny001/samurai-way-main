import * as React from "react";
import userPhoto from "../../assets/images/istockphoto-1337144146-612x612.jpeg";
import styles from "./user.module.css";
import { initialStateType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../API/api";


type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    usersPage: initialStateType
    onPageChanged: (pageNumber: number) => void
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: [] | number[]
    follow: (id: any) => any
    unFollow : (id: any) => any
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
    // console.log(props.followingInProgress)
    return (
        <div>
            {renderPages}
            {props.usersPage.users.map(el => {
                    return<div>
                        <span><div>
                            <NavLink to={'/profile/'+ el.id}>
                                      <img src={el.photos.small  !== null ? el.photos.small :  userPhoto} alt='avatar' className={styles.userPhoto}/>
                            </NavLink>
                        </div></span>
                        <span>{el.followed ?
                            <button
                                disabled={props.followingInProgress.some(id => id === el.id )}
                                onClick={()=>{
                            // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                            //     withCredentials: true,
                            //         headers: {
                            //             'API-KEY' : '51dcd19b-ecdb-4fba-82fc-a680bf8e7c9b'
                            //         }
                            // })
                            //         props.unFollow(el.id)
                                    props.toggleFollowingProgress(true, el.id)
                                    userAPI.unFollowSuccess(el.id)
                                        .then(data => {
                                            console.log(data.resultCode)
                                            if(data.resultCode === 0){
                                                props.unFollowUser(el.id)
                                            }
                                            props.toggleFollowingProgress(false, el.id)

                                })
                            }}>Follow</button> :
                            <button
                                disabled={props.followingInProgress.some(id => id === el.id )}
                                onClick={()=>{
                            // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {} , {
                            //     withCredentials: true,
                            //     headers: {
                            //         'API-KEY' : '51dcd19b-ecdb-4fba-82fc-a680bf8e7c9b'
                            //     }
                            // })
                            //         props.follow(el.id)
                                    props.toggleFollowingProgress(true, el.id)
                                    userAPI.followSuccess(el.id)
                                        .then(data => {
                                            console.log(data.resultCode)
                                            if(data.resultCode === 0){
                                                props.followUser(el.id)
                                            }      props.toggleFollowingProgress(false, el.id)
                                        })
                            }
                            }>Unfollow</button>}</span>
                        <span><div>{el.name}</div><div>{el.status}</div></span>
                        <span><div>{'el.location.country'}</div><div>{'el.location.city'}</div></span>
                    </div>
                }
            )}
        </div>
    );
};
export default Users;
