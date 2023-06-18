import React from "react"
import {MyPosts} from "./MyPosts /MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../redux/state";




type PostsDataPropsType = {
    profilePage: ProfilePageType
    addPost: (newMessage: string) => void
}
export const Profile = (props: PostsDataPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData} addPost={props.addPost}/>
        </div>

    )
}
