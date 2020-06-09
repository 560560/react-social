import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
debugger;
  if (!props.profile ) {
    return <Preloader />
  }
  else {
    return (
        <div>
            <div className={s.profileBackground}>
                <img src="http://9878621572.myjino.ru/img/sea.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large} alt=""/>
                    description
                </div>
            </div>
        </div>)

  }
}

export default ProfileInfo;