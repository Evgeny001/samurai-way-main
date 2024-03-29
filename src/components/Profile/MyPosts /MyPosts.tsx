import React, {ChangeEvent} from 'react'
import {Pocts} from "./Pocts/Pocts";
import {PostsDataPropsType} from "./MyPostsContainer";

export const MyPosts = (props: PostsDataPropsType) => {
    const poctsElements = props.postsData.map(el => <Pocts message={el.message} likes={el.likes}/>)
    let addPostHandler = () => {
       props.addPost()
    }

    let onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.updateNewPostText(text)
    }
    return (
        <div>
            <h3>My posts</h3>
            <textarea  value={props.newPostText} onChange={onPostChangeHandler}/>
            <div>
                <button onClick={addPostHandler}>Add Post</button>
            </div>
            <div>
                {poctsElements}
            </div>
        </div>
    )
}
