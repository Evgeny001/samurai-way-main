import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, initialStateType, setUsersAC, unFollowAC, UserType,} from "../../redux/usersReducer";
import {connect} from "react-redux";
import {Users} from "./UsersС";




type mapStateToPropsType = {
    usersPage: initialStateType
}
type mapDispatchToPropsType = {
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType  => {
 return{
     usersPage: state.usersPage
 }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return{
        followUser: (userId: number) => {dispatch(followAC(userId))},
        unFollowUser: (userId: number) => {dispatch(unFollowAC(userId))},
        setUsers: (users: UserType[]) => {dispatch(setUsersAC(users))}
        }
    }
    export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
