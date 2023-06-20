import React, {ChangeEvent} from 'react'
import {Pocts} from "./Pocts/Pocts";
import {PostsDataType} from "../../../redux/state";


type PostsDataPropsType = {
    postsData: PostsDataType[]
    // addPost: (newMessage: string) => void
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: PostsDataPropsType) => {
    const poctsElements = props.postsData.map(el => <Pocts message={el.message} likes={el.likes}/>)

    // let newPostElement = useRef<HTMLTextAreaElement>(null)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        props.addPost()
    }
    // let addPost = () => {
    //     props.addPost(props.newPostText)
    // }
    // let addPost = () => {
    //     debugger
    //     if(newPostElement.current){
    //         // console.log(text)
    //         let text =   newPostElement.current.value
    //         props.addPost(text)
    //         props.updateNewPostText("")
    //     }
    // }
    // const addPost = () => {
    //     alert("Hi")
    // }
    // let newPostElement = React.useRef<HTMLTextAreaElement>(null)
    // if(newPostElement.current !== null) {
    //     let text = newPostElement.current.value
    //     console.log(text)
    // }
    // let onPostChange = () => {
    //     if(newPostElement.current){
    //         // console.log(newPostElement.current.value)
    //         props.updateNewPostText(newPostElement.current.value)
    //     }
    // }
    let onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value)
    }
    return (
        <div>
            <h3>My posts</h3>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChangeHandler}/>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div>
                {poctsElements}
            </div>
        </div>
    )
}
