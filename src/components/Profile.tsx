// @ts-ignore
import React from "react"
import Classes from './Profile.module.css'


export const Profile = () => {
    return (
        <div className= {Classes.content}>
            <div><img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_1280.jpg" alt="#"/></div>
            <div >ava+des</div>
            <div>mw posts
                <div>new post</div>
            </div>
            <div className={Classes.item}>post1</div>
            <div className={Classes.item}>post2</div>
        </div>
    )
}
