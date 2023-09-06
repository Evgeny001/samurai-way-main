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
import {Users} from "./UsersС";




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
    export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
