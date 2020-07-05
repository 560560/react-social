import React from 'react';

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../Common/Preloader/Preloader";

const Profile = ({isLoading, profile, myId, match, userStatus, updateUserStatus, savePhoto,
                     isFollowed, followFromProfile, unfollowFromProfile, userId, isOwner, isOpen, setIsOpen}) => {
  if (isLoading) {
    return <Preloader/>
  } else {

  return (
    <div>
      <ProfileInfo profile={profile} myId={myId} url={match.url} userStatus={userStatus}
                   updateUserStatus={updateUserStatus} isFollowed={isFollowed}
                   followFromProfile={followFromProfile} isOpen={isOpen} setIsOpen={setIsOpen}
                   unfollowFromProfile={unfollowFromProfile} userId={userId} isOwner={isOwner} savePhoto={savePhoto}/>
      <MyPostsContainer />
    </div>)


}}

export default Profile;