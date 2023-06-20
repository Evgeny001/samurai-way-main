import React from "react"
import {MyPosts} from "./MyPosts /MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../redux/state";

type PostsDataPropsType = {
    profilePage: ProfilePageType
    // addPost: (newMessage: string) => void
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText : string) => void
}
export const Profile:React.FC<PostsDataPropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>

    )
}
