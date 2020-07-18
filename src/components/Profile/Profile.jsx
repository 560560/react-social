import React from 'react';

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../Common/Preloader/Preloader";

const Profile = ({isLoading, profile, myId, match, userStatus, updateUserStatus,
                     savePhoto, errorMessage, isFollowed, followFromProfile,
                     unfollowFromProfile, userId, isOwner, isOpen, setIsOpen,
                     addPhotoError, setProfileEditMode, setNewProfileContacts, profileEditMode}) => {
  if (isLoading && !profile) {
    return <Preloader/>
  }else {

  return (
    <div>
      <ProfileInfo profile={profile} myId={myId} url={match.url} userStatus={userStatus}
                   updateUserStatus={updateUserStatus} isFollowed={isFollowed} errorMessage ={errorMessage}
                   followFromProfile={followFromProfile} isOpen={isOpen} setIsOpen={setIsOpen}
                   unfollowFromProfile={unfollowFromProfile} userId={userId} isOwner={isOwner}
                   savePhoto={savePhoto} addPhotoError={addPhotoError} isLoading={isLoading}
                   setProfileEditMode={setProfileEditMode} setNewProfileContacts={setNewProfileContacts} profileEditMode={profileEditMode}/>
      <MyPostsContainer />
    </div>)


}}

export default Profile;