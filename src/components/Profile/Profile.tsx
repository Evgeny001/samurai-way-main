import React from "react"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts /MyPostsContainer";


type PostsDataPropsType = {
    // profilePage: ProfilePageType
    // // addPost: (newMessage: string) => void
    // dispatch: (action: ActionTypes) => void
    // newPostText: string
    // store: StoreType

}
export const Profile:React.FC<PostsDataPropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>

    )
}
