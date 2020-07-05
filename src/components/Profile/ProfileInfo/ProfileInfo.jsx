import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ava_null from "./../../../assets/images/ava_null.png"
import ProfileStatus from "../ProfileStatus";
import ContactsBlock from "./ContactsBlock";
import AddAvatar from "./addAvatar/AddAvatar";


const ProfileInfo = ({
                         profile, userId, myId, isFollowed, followFromProfile,
                         isOpen, setIsOpen, unfollowFromProfile, userStatus,
                         updateUserStatus, url, isOwner, savePhoto, errorMessage, addPhotoError
                     }) => {

    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                {/*                <div className={s.profileBackground}>
                    <img src="http://9878621572.myjino.ru/img/sea.jpg" alt=""/>
                </div>*/}
                <div className={s.profileInfo}>
                    <div className={s.avatarAndButtons}>
                        <div className={s.avatar}><img src={!profile.photos.large ? ava_null : profile.photos.large}
                                                       alt=""/></div>
                        {(isOwner)
                            ? <div>
                                <div className={s.editPage}>
                                    <button>Edit page</button>
                                </div>
                                <div className={s.addPhoto}>
                                    <button onClick={() => setIsOpen(true)}>Add photo</button>
                                    <AddAvatar isOpen={isOpen} setIsOpen={setIsOpen} savePhoto={savePhoto}
                                               errorMessage={errorMessage} addPhotoError={addPhotoError}/>
                                </div>
                            </div>
                            : <div>
                                <div className={s.sendMessageButton}>
                                    <button>Send message</button>
                                </div>
                                {isFollowed
                                    ? <div className={s.isFollow}>
                                        <button onClick={() => {
                                            unfollowFromProfile(userId)
                                        }}>Unfollow
                                        </button>
                                    </div>
                                    : <div className={s.isNotFollow}>
                                        <button onClick={() => {
                                            followFromProfile(userId)
                                        }}>Follow
                                        </button>
                                    </div>}
                            </div>
                        }


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

                        <ContactsBlock profile={profile}/>

                        <div className={s.job}>{profile.lookingForAJob && "Looking for a job: "}
                            <span>{profile.lookingForAJobDescription}</span></div>


                    </div>
                </div>
            </div>)

    }
}

export default ProfileInfo;