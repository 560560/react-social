import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileBackground from "./ProfileBackground/ProfileBackground";

const Profile = (props) => {
  return (
    <div>
      <ProfileBackground/>
      <div className={s.avatar}>
        <img src="http://9878621572.myjino.ru/img/cat.jpg" alt=""/>
        description
      </div>
      <MyPosts/>
    </div>)


}

export default Profile;