import {ActionTypes, MessagesPageType, SendMessageType, UpdateNewMessageBodyType} from "./state";

export const dialogsReducer = (state: MessagesPageType, action: ActionTypes): MessagesPageType => {
    if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
       state.newMessageBody = action.newMessageBody
    } else if (action.type === "SEND_MESSAGE") {
        let body = state.newMessageBody
        state.newMessageBody = ''
        state.messagesData.push({id: 6, message: body})
    }
    return state
};

export const updateNewMessageBodyActionCreator = ( newMessageBody: string): UpdateNewMessageBodyType => {
    return { type: "UPDATE_NEW_MESSAGE_BODY", newMessageBody: newMessageBody }
}
export const sendMessageActionCreator = (): SendMessageType => {
    return { type: 'SEND_MESSAGE' }
}
