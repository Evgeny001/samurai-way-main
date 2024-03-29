import {userAPI} from "../API/api";
import {Dispatch} from "redux";

export type  FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
export type UnFollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}
export type setUsersActionType = {
    type: 'SET-USERS',
    users: UserType[]
}
type SetCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
type SetTotalUsersCountActionType = {
    type: 'SET_TOTAL_USERS_COUTN',
    totalCount: number
}
type  ToggleIsFetchingActionType = {
    type: 'TOGGLE_IS_FETCHING'
    ifFetching: boolean
}
type FollowingInProgressActionType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching : boolean
    userId: number
}
type ActionTypes = FollowActionType
    | UnFollowActionType
    | setUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | FollowingInProgressActionType
// export type LocationType = {
//     city: string
//     country: string
// }
// export type UserType = {
//     id: number,
//     followed: boolean,
//     fullName: string,
//     status: string,
//     photoUrl: string
//     location: LocationType
// }
export type initialStateType = {
    users: Array<UserType>
    totalUserCount: number
    pageSize: number
    currentPage: number
    ifFetching: boolean
    followingInProgress: [] | Array<number>
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: null
    status: null
    followed: boolean
    photos: {
        small: null
        large: null
    }
}
const initialState: initialStateType = {
    users: [
        // {id: 1, followed: true, fullName: "Dmitry", status: "I'm a boss", photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg" ,
        //     location: {city: "Minsk", country: "Belarus"}},
        // {id: 2, followed: false, fullName: "Sasha", status: "I'm a boss", photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg",
        //     location: {city: "Moscow", country: "Russian"}},
        // {id: 3, followed: true, fullName: "Andrew", status: "I'm a boss",  photoUrl: "https://drevnerus.ru/drevnerus.ru/public_html/wp-content/uploads/2011/12/volhvy-2.jpg",
        //     location: {city: "Kiev", country: "Ukraine"}}
    ],
    totalUserCount: 0,
    pageSize: 100,
    currentPage: 1,
    ifFetching: false,
    followingInProgress: [  ]
}
// export type initialStateType = typeof initialState
export const usersReducer = (state:initialStateType = initialState, action: ActionTypes  ): initialStateType => {
    debugger
    switch (action.type) {
        case "FOLLOW" : {
            return {
                ...state, users: state.users.map(el=> el.id=== action.userId ?{...el, followed: true}: el)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state, users: state.users.map(el=> el.id=== action.userId ?{...el, followed: false}: el)
            }
        }
        case 'SET-USERS': {
            return {
                // ...state, users: [...state.users, ...action.users]
                ...state, users:  action.users
            }
        }
        case 'SET_CURRENT_PAGE': {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case 'SET_TOTAL_USERS_COUTN' : {
            return {
                ...state, totalUserCount: action.totalCount
            }
        }
        case 'TOGGLE_IS_FETCHING': {
            return {
                ...state, ifFetching: action.ifFetching
            }
        }
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state, followingInProgress:   action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(el => el!== action.userId)

            }
        }
        default: return state
    }
}
export const getUsers = (currentPage: any, pageSize: any) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        userAPI.getUsers(currentPage,pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                console.log(data)
            }).catch(()=>console.log('!'))
        dispatch(toggleIsFetching(false))
    }
}
export const follow = (id: any) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        userAPI.unFollowSuccess(id)
            .then(data => {
                console.log(data.resultCode)
                if(data.resultCode === 0){
                    dispatch(unFollowUser(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })}
    }
export const unFollow = (id: any) => {
    debugger
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, id))
        userAPI.unFollowSuccess(id)
            .then(data => {
                console.log(data)
                if(data.resultCode === 0){
                    dispatch(followUser(id))
                }      dispatch(toggleFollowingProgress(false, id))
            })
    }
}
export const followUser = (userId: number): FollowActionType => {
    return {type: 'FOLLOW', userId: userId}
}
export const unFollowUser = (userId: number): UnFollowActionType => {
    return {type: 'UNFOLLOW', userId: userId}

}
export const setUsers = (users: UserType[]): setUsersActionType => {
    return {type: 'SET-USERS', users}
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
    return {type: 'SET_CURRENT_PAGE', currentPage}
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => {
   return {type: 'SET_TOTAL_USERS_COUTN', totalCount}
}
export const toggleIsFetching = (ifFetching: boolean): ToggleIsFetchingActionType => {
    return {type: 'TOGGLE_IS_FETCHING', ifFetching}
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): FollowingInProgressActionType => {
    return {type: "TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId}
}
