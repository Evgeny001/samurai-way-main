import {FollowActionType, setUsersActionType, UnFollowActionType} from "./usersReducer";
import {ProfileResponseType} from "./profileReducer";
import {DataAuthType} from "./authReduser";


export type AddPostActionType = {
    type: 'ADD_POST'
}
export type  UpdateNewPostTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}
export type  UpdateNewMessageBodyType = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    newMessageBody: string
}
export type SendMessageType = {
    type: 'SEND_MESSAGE'
}
export type setUserProfileTypeActionType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileResponseType
}
export type setAuthUserDataTypeActionType = {
    type: 'SET_USER_DATA'
    data: DataAuthType
}
export type RootActionTypes = AddPostActionType | UpdateNewPostTextActionType |
    UpdateNewMessageBodyType  | SendMessageType | FollowActionType | UnFollowActionType | setUsersActionType |
    setUserProfileTypeActionType | setAuthUserDataTypeActionType
