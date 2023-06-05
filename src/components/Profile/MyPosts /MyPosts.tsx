import React from "react";
import {Pocts} from "./Pocts/Pocts";
import {PostsDataType} from "../Profile";


type PostsDataPropsType = {
    postsData: PostsDataType[]
}

export const MyPosts = (props: PostsDataPropsType) => {
    const poctsElements = props.postsData.map(el=> <Pocts message={el.message} likes={el.likes}/>)
    return(
        <div>
            <h3>My posts</h3>
            <textarea></textarea>
            <div>
                <button>Add Post</button>
            </div>

            <div >
                {poctsElements}
            </div>
        </div>
    )
}
