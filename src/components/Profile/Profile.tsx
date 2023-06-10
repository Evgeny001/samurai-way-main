import React from "react"
import {MyPosts} from "./MyPosts /MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../redux/state";




type PostsDataPropsType = {
    profilePage: ProfilePageType
}
export const Profile = (props: PostsDataPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}/>
        </div>

    )
}
