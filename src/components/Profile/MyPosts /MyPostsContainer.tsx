import React from 'react'
import {addPostActionCreater, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type PostsDataType = {
    message: string
    likes: number
    id: number
}
type mapStateToPropsType = {
    postsData: PostsDataType[],
    newPostText: string
}
type mapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
export type PostsDataPropsType =  mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => dispatch(addPostActionCreater())
            }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps ) (MyPosts)

//(dispatch: Dispatch) - import {Dispatch} from "redux"; обязательно из redux!!!
// эта типизация проверяет, что бы мы Dispatch именно Action - объект у которого есть свойство type.
