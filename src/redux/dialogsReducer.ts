import {ActionTypes, MessagesPageType, SendMessageType, UpdateNewMessageBodyType} from "./state";

let initailState: MessagesPageType = {
    dialogsData: [
        {id: 1, name: 'Dinich'},
        {id: 2, name: 'Andrey'},
        {id: 4, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
        messagesData: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How is your IT-kamasutra?'},
    {id: 3, message: 'Yo'}
],
    newMessageBody: ""
}

export const dialogsReducer = (state = initailState, action: ActionTypes): MessagesPageType => {
    debugger
    switch (action.type){
       case 'UPDATE_NEW_MESSAGE_BODY': {
           return  {...state, newMessageBody: action.newMessageBody}
       }
       case 'SEND_MESSAGE': {
           let body = state.newMessageBody
           return {...state, newMessageBody: " ", messagesData: [...state.messagesData, {id: 6, message: body}]}
       }
       default: return state
   }
    // export const dialogsReducer = (state = initailState, action: ActionTypes): MessagesPageType => {
    //     let stateCopy = {...state, messagesData: [...state.messagesData]  }
    //     switch (action.type){
    //         case 'UPDATE_NEW_MESSAGE_BODY': {
    //             stateCopy.newMessageBody = action.newMessageBody
    //             return stateCopy
    //         }
    //         case 'SEND_MESSAGE': {
    //             let body = state.newMessageBody
    //             stateCopy.newMessageBody = ''
    //             stateCopy.messagesData.push({id: 6, message: body})
    //             return stateCopy
    //         }
    //         default: return state
    //     }
    // if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
    //     state.newMessageBody = action.newMessageBody
    // } else if (action.type === "SEND_MESSAGE") {
    //     let body = state.newMessageBody
    //     state.newMessageBody = ''
    //     state.messagesData.push({id: 6, message: body})
    // }
    // return state
};




export const updateNewMessageBodyActionCreator = ( newMessageBody: string): UpdateNewMessageBodyType => {
    return { type: "UPDATE_NEW_MESSAGE_BODY", newMessageBody: newMessageBody }
}
export const sendMessageActionCreator = (): SendMessageType => {
    return { type: 'SEND_MESSAGE' }
}
