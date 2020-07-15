import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ava_null from "./../../../assets/images/ava_null.png"
import ProfileStatus from "../ProfileStatus";
import ContactsBlock from "./Contacts/ContactsBlock";
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";
import ContactsBlockEditMode from "./ContactsEditMode/ContactsBlockEditMode";


const ProfileInfo = ({
                         profile, userId, myId, isFollowed, followFromProfile,
                         isOpen, setIsOpen, unfollowFromProfile, userStatus,
                         updateUserStatus, url, isOwner, savePhoto, errorMessage,
                         addPhotoError, setEditMode, setNewProfileContacts, editMode
                     }) => {


    let contactsFormSubmit = (formData) => {
        setNewProfileContacts(formData)
    }

    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <div>

                <div className={s.profileInfo}>
                    <div className={s.avatarAndButtons}>
                        <div className={s.avatar}><img src={!profile.photos.large ? ava_null : profile.photos.large}
                                                       alt=""/></div>

                        <ButtonsBlock userId={userId} isFollowed={isFollowed} followFromProfile={followFromProfile}
                                      isOpen={isOpen} setIsOpen={setIsOpen} unfollowFromProfile={unfollowFromProfile}
                                      isOwner={isOwner} savePhoto={savePhoto} errorMessage={errorMessage}
                                      addPhotoError={addPhotoError} setEditMode={setEditMode} editMode={editMode}/>

                    </div>
                    <div className={s.description}>
                        <div className={s.userName_status}>
                            <div className={s.userName}>{profile.fullName}</div>
                            {url === "/profile" || url === `/profile/${myId}`
                                ? <ProfileStatus status={userStatus} updateUserStatus={updateUserStatus} myId={myId}/>
                                : <div>{userStatus}</div>}
                        </div>

                        <div className={s.contactsHeader}>
                            <div>Privat information</div>
                            <div>My contacts:</div>
                        </div>

                        {editMode
                            ? <ContactsBlockEditMode profile={profile} contactsFormSubmit={contactsFormSubmit}
                                                     setEditMode={setEditMode}/>
                            : <ContactsBlock profile={profile}/>}

                    </div>
                </div>
            </div>)

    }
}

export default ProfileInfo;