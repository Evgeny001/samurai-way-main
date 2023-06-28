import React from "react"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "./MyPosts /MyPostsContainer";
import {StoreType} from "../../redux/redux-store";

import {ActionTypes, ProfilePageType} from "../../redux/state";


type PostsDataPropsType = {
    profilePage: ProfilePageType
    // addPost: (newMessage: string) => void
    dispatch: (action: ActionTypes) => void
    newPostText: string
    store: StoreType

}
export const Profile:React.FC<PostsDataPropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
            />
        </div>

    )
}
