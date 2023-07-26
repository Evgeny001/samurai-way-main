import {ActionTypes, AddPostActionType, UpdateNewPostTextActionType} from "./ActionType";

type PostsDataType = {
    message: string
    likes: number
    id: number
}
type ProfilePageType = {
    postsData: PostsDataType[]
    newPostText: string
}
let initailState: ProfilePageType = {
    postsData: [
        {id: 1, message: 'Hi, how are you', likes: 15},
        {id: 2, message: 'It is my first post', likes: 20}
    ],
    newPostText: '',
}

export const profileReducer = (state: ProfilePageType = initailState, action: ActionTypes ): ProfilePageType  => {
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
        default: return state
    }
};
export const addPostActionCreater  = (): AddPostActionType => {
    return {type: "ADD_POST"}
}
export const updateNewPostTextActionCreator = ( newPostText: string): UpdateNewPostTextActionType => {
    return { type: "UPDATE_NEW_POST_TEXT", newText: newPostText }
}
