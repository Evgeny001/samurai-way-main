import React from "react"
import {MyPosts} from "./MyPosts /MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/state";


type PostsDataPropsType = {
    profilePage: ProfilePageType
    // addPost: (newMessage: string) => void
    dispatch: (action: ActionTypes) => void
    newPostText: string

}
export const Profile:React.FC<PostsDataPropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
            />
        </div>

    )
}
