import React from 'react'
import {addPostActionCreater, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";


type PostsDataPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: PostsDataPropsType) => {

    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreater())
    }

    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <div>
       <MyPosts postsData={state.profilePage.postsData}
                newPostText={state.profilePage.newPostText}
                updaNewPostText={onPostChange}
                addPost={addPost}/>
        </div>
    )
}
