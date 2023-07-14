import React from 'react'
import {addPostActionCreater, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppRootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {PostsDataType} from "../../../redux/state";

type mapStateToProps = {
    postsData: PostsDataType[],
    newPostText: string
}
type mapDispatchToProps = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppRootStateType): mapStateToProps => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
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
