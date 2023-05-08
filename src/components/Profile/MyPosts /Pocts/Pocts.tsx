import React from "react";
import Classes from './Pocts.module.css'

type PostsPropsType = {
   message: string
    likes : number
}

export const Pocts:React.FC<PostsPropsType> = (props) => {
    return(
        <div>
            <div className={Classes.item}>
               <img
                   src='https://assets.survivalinternational.org/pictures/489/4116455578-1f8d781f66-b_article_column@2x.jpg' alt=""/>
            <div className={Classes.item}>{props.message}</div>
            <div><span>like {props.likes}</span></div>
            </div>
        </div>

    )
}
