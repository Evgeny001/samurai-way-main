import React from "react";
import Classes from './Pocts.module.css'

export const Pocts = () => {
    return(
        <div>
            <div className={Classes.item}>
               <img
                   src='https://assets.survivalinternational.org/pictures/489/4116455578-1f8d781f66-b_article_column@2x.jpg' alt=""/>
            <div className={Classes.item}>post1</div>
            <div><span>like</span></div>
            </div>
        </div>

    )
}
