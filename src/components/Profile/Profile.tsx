import React from "react"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts /MyPostsContainer";
import {ProfileResponseType} from "../../redux/profileReducer";


type PostsDataPropsType = {
    // profilePage: ProfilePageType
    // // addPost: (newMessage: string) => void
    // dispatch: (action: ActionTypes) => void
    // newPostText: string
    // store: StoreType
    profile: ProfileResponseType  | null

}
export const Profile:React.FC<PostsDataPropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profile = {props.profile} />
            <MyPostsContainer/>
        </div>

    )
}
