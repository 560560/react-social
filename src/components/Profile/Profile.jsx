import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";
import {updateTextareaMyPostsData} from "../../redux/state";

const Profile = (props) => {

    return (
        <div>

            <ProfileInfo/>
            <MyPosts state={props.state} addPost={props.addPost} updateTextareaMyPostsData={props.updateTextareaMyPostsData}/>
        </div>)


}

export default Profile;