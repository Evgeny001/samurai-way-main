import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Preloader /Preloader";
import {ProfileResponseType} from "../../../redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus";
type ProfileInfoPropsType = {
    profile: ProfileResponseType  | null
 }

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
            <div >
                {/*<div><img src={props.profile.photos.large} alt="#"/>*/}
                <img style={{width: '20%'}} alt="dw" src={props.profile?.photos.large || ''} />
                <div className={s.descriptionBlock}>
                    <ProfileStatus status={'Hi-Hi'}/>
                </div>
                    <ul>
                        <li>facebook: {props.profile.contacts.facebook}</li>
                        <li>vk: {props.profile.contacts.vk}</li>
                        <li>twitter: {props.profile.contacts.twitter}</li>
                        <li>instagram: {props.profile.contacts.instagram}</li>
                        <li>github: {props.profile.contacts.github}</li>
                    </ul>
        </div>
    );
};
