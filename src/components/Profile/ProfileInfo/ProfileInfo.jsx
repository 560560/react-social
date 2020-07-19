import React from 'react';
import s from './ProfileInfo.module.css';
import ava_null from "./../../../assets/images/ava_null.png"
import ProfileStatus from "../ProfileStatus";
import ContactsBlock from "./Contacts/ContactsBlock";
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";
import ContactsBlockEditMode from "./ContactsEditMode/ContactsBlockEditMode";
import Preloader from "../../Common/Preloader/Preloader";


const ProfileInfo = ({
                         profile, userId, myId, isFollowed, followFromProfile,
                         isOpen, setIsOpen, unfollowFromProfile, userStatus, isLoading,
                         updateUserStatus, url, isOwner, savePhoto, errorMessage,
                         addPhotoError, setProfileEditMode, setNewProfileContacts, profileEditMode
                     }) => {

    let contactsFormSubmit = (formData) => {
        setNewProfileContacts(formData, myId)
    }

    if (!profile) { return <Preloader/>
    } else {
        return (
            <div className={isLoading ? s.loadingContentWrapper : ""}>

                <div className={s.profileInfo}>
                    <div className={s.avatarAndButtons}>
                        <div className={s.avatar}><img src={!profile.photos.large ? ava_null : profile.photos.large}
                                                       alt=""/></div>

                        <ButtonsBlock userId={userId} isFollowed={isFollowed} followFromProfile={followFromProfile}
                                      isOpen={isOpen} setIsOpen={setIsOpen} unfollowFromProfile={unfollowFromProfile}
                                      isOwner={isOwner} savePhoto={savePhoto} errorMessage={errorMessage}
                                      addPhotoError={addPhotoError} setProfileEditMode={setProfileEditMode}
                                      profileEditMode={profileEditMode}/>

                    </div>
                    <div className={s.description}>
                        <div className={s.userName_status}>
                            <div className={s.userName}>{profile.fullName}</div>
                            {url === "/profile" || url === `/profile/${myId}`
                                ? <ProfileStatus status={userStatus} updateUserStatus={updateUserStatus} myId={myId}/>
                                : <div>{userStatus}</div>}
                        </div>

                        <div className={s.contactsHeader}>
                            <div>Profile information</div>
                            <div>My contacts:</div>
                        </div>

                        {profileEditMode
                            ? <ContactsBlockEditMode profile={profile} contactsFormSubmit={contactsFormSubmit}
                                                     setProfileEditMode={setProfileEditMode}/>
                            : <ContactsBlock profile={profile}/>}

                    </div>
                </div>
            </div>)
    }


}

export default ProfileInfo;