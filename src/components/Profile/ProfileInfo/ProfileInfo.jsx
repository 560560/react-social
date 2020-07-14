import React, {useState} from 'react';
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
                         updateUserStatus, url, isOwner, savePhoto, errorMessage, addPhotoError
                     }) => {

    const [editPageMode, setEditPageMode] = useState(false)

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
                                      addPhotoError={addPhotoError} setEditPageMode={setEditPageMode}
                                      editPageMode={editPageMode}/>

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

                        {editPageMode
                            ? <ContactsBlockEditMode profile={profile}/>
                            : <ContactsBlock profile={profile}/>}

                    </div>
                </div>
            </div>)

    }
}

export default ProfileInfo;