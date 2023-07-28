import {ActionTypes} from "./ActionType";



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
    ]
}
export type initialStateType = {
    users: Array<UserType>
}
// export type initialStateType = typeof initialState
export const usersReducer = (state:initialStateType = initialState, action: ActionTypes ): initialStateType => {
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
                ...state, users:  [...action.users]
            }
        }
        default: return state
    }
}

debugger

export const followAC = (userId: number): FollowActionType => {
    return {type: 'FOLLOW', userId: userId}
}
export const unFollowAC = (userId: number): UnFollowActionType => {
    return {type: 'UNFOLLOW', userId: userId}

}
export const setUsersAC = (users: UserType[]): setUsersActionType => {
    return {type: 'SET-USERS', users}
}
