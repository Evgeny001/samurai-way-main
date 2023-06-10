import React from "react";
import {Pocts} from "./Pocts/Pocts";
import {PostsDataType} from "../../../redux/state";





type PostsDataPropsType = {
    postsData: PostsDataType[]
}

export const MyPosts = (props: PostsDataPropsType) => {
    const poctsElements = props.postsData.map(el=> <Pocts message={el.message} likes={el.likes}/>)
    // let newPostElement = React.createRef()
    // let addPost = () => {
    //     let text = newPostElement.current.value
    // }
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
