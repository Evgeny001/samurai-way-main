import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
            <div >
                <div><img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_1280.jpg" alt="#"/>
                </div>
                <div className={s.descriptionBlock}>ava+description</div>
        </div>
    );
};
