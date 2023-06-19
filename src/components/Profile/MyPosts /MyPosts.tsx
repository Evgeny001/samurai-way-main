import React from 'react'
import {Pocts} from "./Pocts/Pocts";
import {PostsDataType} from "../../../redux/state";


type PostsDataPropsType = {
    postsData: PostsDataType[]
    addPost: (newMessage: string) => void
}

export const MyPosts = (props: PostsDataPropsType) => {
    const poctsElements = props.postsData.map(el => <Pocts message={el.message} likes={el.likes}/>)

    // let newPostElement = useRef<HTMLTextAreaElement>(null)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        debugger
        if(newPostElement.current){
            // console.log(text)
            let text =   newPostElement.current.value
            props.addPost(text)
            newPostElement.current.value = ""
        }
    }


    // const addPost = () => {
    //     alert("Hi")
    // }
    // let newPostElement = React.useRef<HTMLTextAreaElement>(null)
    // if(newPostElement.current !== null) {
    //     let text = newPostElement.current.value
    //     console.log(text)
    // }


    return (
        <div>
            <h3>My posts</h3>
            <textarea ref={newPostElement}></textarea>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>


            <div>
                {poctsElements}
            </div>
        </div>
    )
}
