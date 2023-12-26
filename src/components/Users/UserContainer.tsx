import {AppRootStateType} from "../../redux/redux-store";

import {
    follow,
    followUser, getUsers,
    initialStateType,
    setCurrentPage,
    toggleFollowingProgress, toggleIsFetching, unFollow,
    unFollowUser,

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
    followingInProgress: [] | number[]
}
type mapDispatchToPropsType = {
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setCurrentPage: (currentPage: number)  => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers:  (currentPage: any, pageSize: any) => any
    follow: (id: any) => any
    unFollow: (id: any) => any
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType =  UsersPropsType

export class UsersComponent  extends React.Component<PropsType> {
    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
//componentDidMount() делает первоначальный запрос на сервер, при запуске class Users1, получает данные и отправляет в State.
//count=${ this.props.pageSize } количество Users1 в одной порции запроса.
    onPageChanged = (pageNumber: number) => {
        // this.props.setCurrentPage(pageNumber);
        {this.props.getUsers(pageNumber, this.props.pageSize)}
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
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
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
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    follow,
    unFollow
})(UsersComponent)
