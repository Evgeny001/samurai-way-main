import {FollowActionType, setUsersActionType, UnFollowActionType} from "./usersReducer";

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
export type ActionTypes = AddPostActionType | UpdateNewPostTextActionType |
    UpdateNewMessageBodyType  | SendMessageType | FollowActionType | UnFollowActionType | setUsersActionType
