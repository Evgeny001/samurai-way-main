import React from "react";
import {Pocts} from "./Pocts/Pocts";
import {PostsDataType} from "../Profile";


type PostsDataPropsType = {
    postsData: PostsDataType[]
}

export const MyPosts = (props: PostsDataPropsType) => {
    return(
        <div>
            <h3>My posts</h3>
            <textarea></textarea>
            <div>
                <button>Add Post</button>
            </div>

            <div >
                <Pocts message={props.postsData[0].message} likes={props.postsData[0].likes} />
                <Pocts message={props.postsData[1].message} likes={props.postsData[1].likes} />

            </div>
        </div>
    )
}
