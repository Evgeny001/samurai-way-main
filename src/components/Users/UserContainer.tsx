import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    initialStateType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType,
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import * as React from "react";
import axios from "axios";
import Users from "./Users";




type mapStateToPropsType = {
    usersPage: initialStateType
    totalUserCount: number
    pageSize: number
    currentPage: number
}
type mapDispatchToPropsType = {
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number)  => void
    setTotalUsersCount: (totalCount: number) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType =  UsersPropsType

export class UsersAPIComponent  extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${ this.props.pageSize }`).then(response => {
            debugger
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)})
    }
//componentDidMount() делает первоначальный запрос на сервер, при запуске class Users1, получает данные и отправляет в State.
//count=${ this.props.pageSize } количество Users1 в одной порции запроса.
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${ this.props.pageSize }`).then(response => {
            debugger
            this.props.setUsers(response.data.items)})
    }
//делаем повторный запрос, при нажатии на кнопку (цифру страницы), в get запрос передаем page=${ this.props.currentPage} страницу,
//которую хотим получить
//count=${ this.props.pageSize } количество Users1 в одной порции запроса.
    render() {
        return (
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   followUser={this.props.followUser}
                   unFollowUser={this.props.unFollowUser}
                   usersPage={this.props.usersPage}
            />
        );
    };
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType  => {
 return{
     usersPage: state.usersPage,
     totalUserCount: state.usersPage.totalUserCount,
     pageSize: state.usersPage.pageSize,
     currentPage: state.usersPage.currentPage
 }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return{
        followUser: (userId: number) => {dispatch(followAC(userId))},
        unFollowUser: (userId: number) => {dispatch(unFollowAC(userId))},
        setUsers: (users: UserType[]) => {dispatch(setUsersAC(users))},
        setCurrentPage: (currentPage: number) => {dispatch(setCurrentPageAC(currentPage))},
        setTotalUsersCount: (totalCount: number) => {dispatch(setTotalUsersCountAC(totalCount))}
    }
    }
    export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
