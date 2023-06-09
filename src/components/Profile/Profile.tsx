import React from "react"
import {MyPosts} from "./MyPosts /MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../index";



type PostsDataPropsType = {
    postsData: PostsDataType[]
}
export const Profile = (props: PostsDataPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>

    )
}
