import * as React from "react";    //import React from "react" 
import userPhoto from "../../assets/images/istockphoto-1337144146-612x612.jpeg";
import styles from "./user.module.css";
import {UsersPropsType} from "./UserContainer";
import axios from "axios";


type PropsType =  UsersPropsType

export class Users extends React.Component<PropsType> {
         componentDidMount() {
             axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${ this.props.pageSize }`).then(response => {
                 debugger
                 this.props.setUsers(response.data.items)
                 this.props.setTotalUsersCount(response.data.totalCount)})
         }
//componentDidMount() делает первоначальный запрос на сервер, при запуске class Users, получает данные и отправляет в State.
//count=${ this.props.pageSize } количество Users в одной порции запроса.
    onPageChanged = (pageNumber: number) => {
             this.props.setCurrentPage(pageNumber)
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${ this.props.pageSize }`).then(response => {
            debugger
            this.props.setUsers(response.data.items)})
    }
//делаем повторный запрос, при нажатии на кнопку (цифру страницы), в get запрос передаем page=${ this.props.currentPage} страницу,
//которую хотим получить
//count=${ this.props.pageSize } количество Users в одной порции запроса.
    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        // let pagesCount = 10
        let pages = []
        for (let i = 1; i<= pagesCount; i++ ){
            pages.push(i)
        }
        console.log(pages)

           const renderPages = pages.map(el=> {
               return <span className={this.props.currentPage === el ? styles.selectedPage : ''}
                            onClick={()=>this.onPageChanged(el)}>{el}</span>} )

        return (
            <div>
                {renderPages}
                <div>


                </div>
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
