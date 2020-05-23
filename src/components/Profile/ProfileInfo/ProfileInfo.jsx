import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profileBackground}>
                <img src="http://9878621572.myjino.ru/img/sea.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.avatar}>
                    <img src="http://9878621572.myjino.ru/img/cat.jpg" alt=""/>
                    description
                </div>
            </div>
        </div>)


}

export default ProfileInfo;