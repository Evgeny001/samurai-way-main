import React from "react"
import Classes from './Profile.module.css'
import {MyPosts} from "./MyPosts /MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type PostsDataType = {
    message: string
    likes: number
    id: number
}
const postsData: PostsDataType[] = [
    {id: 1, message: 'Hi, how are you', likes: 15},
    {id: 2, message: 'It is my first post', likes: 20}
]
type PostsDataPropsType = {
    postsData: PostsDataType[]
}
export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>

    )
}
