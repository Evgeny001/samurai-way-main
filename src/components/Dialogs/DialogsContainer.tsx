import React from 'react';
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hok/withAuthRedirect";

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
    isAuth: boolean
}
type mapDispatchToProps = {
    sendMessage: () => void
    updateNewMessageBody: (text: string) => void
}

export type DialogsPropsType = mapStateToProps & mapDispatchToProps

const  mapStateToProps = (state: AppRootStateType): mapStateToProps => {
    return   {
        state: state.messagesPage,
        isAuth:state.auth.isAuth
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
// let AuthRedirectComponent = (props: DialogsPropsType) => {
//     if(props.isAuth === false) return <Navigate to='/login'/>
//     return <Dialogs {...props}/>
// }
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// export const SuperDialogsContainer = connect (mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)
export const SuperDialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
//-----------------------------------------------------------------------------------------------------//

//(dispatch: Dispatch) - import {Dispatch} from "redux"; обязательно из redux!!!
// эта типизация проверяет, что бы мы Dispatch именно Action - объект у которого есть свойство type.
