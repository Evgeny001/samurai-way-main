import {
    AddPostActionType,
    RootActionTypes,
    setUserProfileTypeActionType,
    UpdateNewPostTextActionType
} from "./ActionType";

type PostsDataType = {
    message: string
    likes: number
    id: number
}
type ProfilePageType = {
    postsData: PostsDataType[]
    newPostText: string
    profile: ProfileResponseType  |  null
}
export type ProfileResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
  type PhotosType = {
    small: string  | null
    large: string   | null
}

let initailState: ProfilePageType = {
    postsData: [
        {id: 1, message: 'Hi, how are you', likes: 15},
        {id: 2, message: 'It is my first post', likes: 20}
    ],
    newPostText: '',
    profile: null as ProfileResponseType | null
}

export const profileReducer = (state: ProfilePageType = initailState, action: RootActionTypes ): ProfilePageType  => {
    switch (action.type) {
        case 'ADD_POST': {
            const newPost: PostsDataType = {
                id: 5,
                message: state.newPostText,
                likes: 15
            }
            return {...state, newPostText:'', postsData: [...state.postsData, newPost]}
    }
        case 'UPDATE_NEW_POST_TEXT':   {
            return {...state, newPostText: action.newText}
        }
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile }
        }
        default: return state
    }
};
export const addPostActionCreater  = (): AddPostActionType => {
    return {type: "ADD_POST"}
}
export const updateNewPostTextActionCreator = ( newPostText: string): UpdateNewPostTextActionType => {
    return { type: "UPDATE_NEW_POST_TEXT", newText: newPostText }
}
export const setUserProfile  = ( profile: ProfileResponseType): setUserProfileTypeActionType => {
    return { type: 'SET_USER_PROFILE', profile }
}
