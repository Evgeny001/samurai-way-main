import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../redux/redux-store";


type DialogsPropsType = {
    store: StoreType
}
export const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState().messagesPage

    const onSendMessageClick = () =>{
           props.store.dispatch(sendMessageActionCreator() )
    }
    const onMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(text))
    }
    return (
   <Dialogs sendMessage={onSendMessageClick} updateNewMessageBody={onMessageChange} state={state}  />
    );
};
