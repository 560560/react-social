import React from 'react';

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../Common/Preloader/Preloader";

const Profile = (props) => {
  if (props.isLoading) {
    return <Preloader/>
  } else {

  return (
    <div>
      <ProfileInfo profile={props.profile} myId={props.myId} url={props.match.url} userStatus={props.userStatus}
                   updateUserStatus={props.updateUserStatus} isFollowed={props.isFollowed}
                   followFromProfile={props.followFromProfile}
                   unfollowFromProfile={props.unfollowFromProfile} userId={props.userId}/>
      <MyPostsContainer store={props.store}/>
    </div>)


}}

export default Profile;