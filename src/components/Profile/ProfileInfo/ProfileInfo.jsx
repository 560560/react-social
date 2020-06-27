import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import website from "./../../../assets/images/website.svg"
import instagram from "./../../../assets/images/instagram.svg"
import twitter from "./../../../assets/images/twitter.svg"
import vk from "./../../../assets/images/vk.svg"
import facebook from "./../../../assets/images/facebook.svg"
import git from "../../../assets/images/git.svg"
import youtube from "./../../../assets/images/youtube.svg"
import mainklink from "./../../../assets/images/mainklink.svg"
import ava_null from "./../../../assets/images/ava_null.png"
import ProfileStatus from "../ProfileStatus";


const ProfileInfo = ({profile, userId, myId, isFollowed, followFromProfile,
                         unfollowFromProfile, userStatus, updateUserStatus, url}) => {

    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                {/*                <div className={s.profileBackground}>
                    <img src="http://9878621572.myjino.ru/img/sea.jpg" alt=""/>
                </div>*/}
                <div className={s.profileInfo}>
                    <div className={s.avatar}>
                        <img src={!profile.photos.large ? ava_null : profile.photos.large} alt=""/>
                        {(userId !== undefined && Number(userId) !== myId)
                            ? <div>
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
                            : <div>
                                <div className={s.editPage}>
                                    <button>Edit page</button>
                                </div>
                                <div className={s.addPhoto}>
                                    <button>Add photo</button>
                                </div>

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
                        <div className={s.about}>
                            <div className={s.aboutMe}>About myself: {profile.aboutMe}</div>
                            <div>
                                <div className={!profile.contacts.facebook ? s.contactItemGray : s.contactItem}>
                                    <img
                                        src={facebook} alt=""/>{
                                    !profile.contacts.facebook ? "Facebook" :
                                        <a href={profile.contacts.facebook}>Facebook</a>}</div>
                                <div className={!profile.contacts.website ? s.contactItemGray : s.contactItem}>
                                    <img src={website}
                                         alt=""/>{
                                    !profile.contacts.website ? "Website" :
                                        <a href={profile.contacts.website}>Website</a>}
                                </div>
                                <div className={!profile.contacts.vk ? s.contactItemGray : s.contactItem}><img
                                    src={vk} alt=""/>{
                                    !profile.contacts.vk ? "VK" : <a href={profile.contacts.vk}>VK</a>}
                                </div>
                                <div className={!profile.contacts.twitter ? s.contactItemGray : s.contactItem}>
                                    <img src={twitter}
                                         alt=""/>{
                                    !profile.contacts.twitter ? "Twitter" :
                                        <a href={profile.contacts.twitter}>Twitter</a>}
                                </div>
                            </div>
                            <div>
                                <div className={!profile.contacts.instagram ? s.contactItemGray : s.contactItem}>
                                    <img
                                        src={instagram} alt=""/>{
                                    !profile.contacts.instagram ? "Instagram" :
                                        <a href={profile.contacts.instagram}>Instagram</a>}</div>
                                <div className={!profile.contacts.youtube ? s.contactItemGray : s.contactItem}>
                                    <img src={youtube}
                                         alt=""/>{
                                    !profile.contacts.youtube ? "YouTube" :
                                        <a href={profile.contacts.youtube}>YouTube</a>}
                                </div>
                                <div className={!profile.contacts.github ? s.contactItemGray : s.contactItem}><img
                                    src={git}
                                    alt=""/>{
                                    !profile.contacts.github ? "GitHub" :
                                        <a href={profile.contacts.github}>GitHub</a>}</div>
                                <div className={!profile.contacts.mainklink ? s.contactItemGray : s.contactItem}>
                                    <img
                                        src={mainklink} alt=""/>{
                                    !profile.contacts.mainklink ? "MainLink" :
                                        <a href={profile.contacts.mainklink}>MainLink</a>}</div>
                            </div>
                        </div>

                        <div className={s.job}>{profile.lookingForAJob && "Looking for a job: "}
                            <span>{profile.lookingForAJobDescription}</span></div>


                    </div>
                </div>
            </div>)

    }
}

export default ProfileInfo;