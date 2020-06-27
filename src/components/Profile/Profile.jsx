import React from 'react';

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../Common/Preloader/Preloader";

const Profile = ({isLoading, profile, myId, match, userStatus, updateUserStatus,
                     isFollowed, followFromProfile, unfollowFromProfile, userId}) => {
  if (isLoading) {
    return <Preloader/>
  } else {

  return (
    <div>
      <ProfileInfo profile={profile} myId={myId} url={match.url} userStatus={userStatus}
                   updateUserStatus={updateUserStatus} isFollowed={isFollowed}
                   followFromProfile={followFromProfile}
                   unfollowFromProfile={unfollowFromProfile} userId={userId}/>
      <MyPostsContainer />
    </div>)


}}

export default Profile;