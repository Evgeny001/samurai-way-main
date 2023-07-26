import React from 'react';
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MessagesPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    newMessageBody: string
}
type DialogsDataType = {
    name: string
    id: number
}
type MessagesDataType = {
    message: string
    id: number
}
type mapStateToProps = {
    state: MessagesPageType
}
type mapDispatchToProps = {
    sendMessage: () => void
    updateNewMessageBody: (text: string) => void
}

export type DialogsPropsType = mapStateToProps & mapDispatchToProps

const  mapStateToProps = (state: AppRootStateType): mapStateToProps => {
    return   {
        state: state.messagesPage,
    }
}
const  mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        sendMessage: ()=>{
            dispatch(sendMessageActionCreator() )
        },
        updateNewMessageBody: (text: string)=>{
            dispatch(updateNewMessageBodyActionCreator(text))
        }
    }
}
export const SuperDialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs)

//(dispatch: Dispatch) - import {Dispatch} from "redux"; обязательно из redux!!!
// эта типизация проверяет, что бы мы Dispatch именно Action - объект у которого есть свойство type.
