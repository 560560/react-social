import React from 'react';

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} myId={props.myId} url={props.match.url} userStatus={props.userStatus}
                         updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer store={props.store}/>
        </div>)


}

export default Profile;