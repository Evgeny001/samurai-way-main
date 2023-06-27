import {
    ActionTypes,
    AddPostActionType,
    PostsDataType,
    ProfilePageType,
    RootStateType,
    UpdateNewPostTextActionType
} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionTypes ): ProfilePageType  => {
    switch (action.type){
        case 'ADD_POST':
            const newPost: PostsDataType = {
                id: 5,
                message: state.newPostText,
                likes: 15
            }
            state.postsData.push(newPost)
            state.newPostText = ""
            return state
        case 'UPDATE_NEW_POST_TEXT':
            state.newPostText = action.newText
            return state
        default: return state
    }
};
export const addPostActionCreater  = (): AddPostActionType => {
    return {type: "ADD_POST"}
}
export const updateNewPostTextActionCreator = ( newPostText: string): UpdateNewPostTextActionType => {
    return { type: "UPDATE_NEW_POST_TEXT", newText: newPostText }
}
