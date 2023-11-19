import {AppRootStateType} from "../../redux/redux-store";

import {
    followUser,
    initialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unFollowUser,
    UserType
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import * as React from "react";
import Users from "./Users";
import Preloader from "../Preloader /Preloader";
import {userIPI} from "../../API/api";



type mapStateToPropsType = {
    usersPage: initialStateType
    totalUserCount: number
    pageSize: number
    currentPage: number
    ifFetching: boolean
    followingInProgress: boolean
}
type mapDispatchToPropsType = {
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number)  => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (ifFetching: boolean) => void
    toggleFollowingProgress: (followingInProgress: boolean) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType =  UsersPropsType

export class UsersComponent  extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        userIPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {

            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)}).finally(()=>{
            this.props.toggleIsFetching(false)
        })
    }
//componentDidMount() делает первоначальный запрос на сервер, при запуске class Users1, получает данные и отправляет в State.
//count=${ this.props.pageSize } количество Users1 в одной порции запроса.
    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        userIPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {

                this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)})
        this.props.setCurrentPage(pageNumber)
    }
//делаем повторный запрос, при нажатии на кнопку (цифру страницы), в get запрос передаем page=${ this.props.currentPage} страницу,
//которую хотим получить
//count=${ this.props.pageSize } количество Users1 в одной порции запроса.
    render() {
        return (
           <>
               {this.props.ifFetching ? <Preloader/> : null}
               <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      followUser={this.props.followUser}
                      unFollowUser={this.props.unFollowUser}
                      usersPage={this.props.usersPage}
                      toggleFollowingProgress={this.props.toggleFollowingProgress}
                      followingInProgress={this.props.followingInProgress}
               />
     </>
        );
    };
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType  => {
 return{
     usersPage: state.usersPage,
     totalUserCount: state.usersPage.totalUserCount,
     pageSize: state.usersPage.pageSize,
     currentPage: state.usersPage.currentPage,
     ifFetching: state.usersPage.ifFetching,
     followingInProgress: state.usersPage.followingInProgress
 }
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return{
//         followUser: (userId: number) => { (followAC(userId))},
//         unFollowUser: (userId: number) => {dispatch(unFollowAC(userId))},
//         setUsers: (users: UserType[]) => {dispatch(setUsersAC(users))},
//         setCurrentPage: (currentPage: number) => {dispatch(setCurrentPageAC(currentPage))},
//         setTotalUsersCount: (totalCount: number) => {dispatch(setTotalUsersCountAC(totalCount))},
//         toggleIsFetchingAC: (ifFetching: boolean) => {dispatch(toggleIsFetchingAC(ifFetching))}
//
//
//     }
//     export const UserContainer = connect(mapStateToProps, {
//         followUser: followAC,
//         unFollowUser: unFollowAC,
//         setUsers: setUsersAC,
//         setCurrentPage: setCurrentPageAC,
//         setTotalUsersCount: setTotalUsersCountAC,
//         toggleIsFetchingAC: toggleIsFetchingAC})(UsersComponent)

export const UserContainer = connect(mapStateToProps, {
    followUser,
    unFollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress})(UsersComponent)
