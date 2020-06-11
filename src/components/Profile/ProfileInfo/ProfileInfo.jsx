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


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  } else {
    return (
      <div>
        <div className={s.profileBackground}>
          <img src="http://9878621572.myjino.ru/img/sea.jpg" alt=""/>
        </div>
        <div className={s.profileInfo}>
          <div className={s.avatar}>
            <img src={!props.profile.photos.large ? ava_null : props.profile.photos.large} alt=""/>
            <div className={s.sendMessageButton}>
              <button>Send message</button>
            </div>
            <div className={s.follow}>
              <button>Follow</button>
            </div>
          </div>
          <div className={s.description}>

            <div className={s.userName_status}>
              <div className={s.userName}>{props.profile.fullName}</div>
              <div className={s.status}>{props.profile.aboutMe}</div>
            </div>

            <div className={s.contactsHeader}>My contacts:</div>
            <div className={s.contacts}>

              <div>
                <div className={!props.profile.contacts.facebook ? s.contactItemGray : s.contactItem}><img src={facebook} alt=""/>{
                  !props.profile.contacts.facebook ? "Facebook" :
                    <a href={props.profile.contacts.facebook}>Facebook</a>}</div>

                <div className={!props.profile.contacts.website ? s.contactItemGray : s.contactItem}><img src={website} alt=""/>{
                  !props.profile.contacts.website ? "Website" : <a href={props.profile.contacts.website}>Website</a>}
                </div>

                <div className={!props.profile.contacts.vk ? s.contactItemGray : s.contactItem}><img src={vk} alt=""/>{
                  !props.profile.contacts.vk ? "VK" : <a href={props.profile.contacts.vk}>VK</a>}</div>

                <div className={!props.profile.contacts.twitter ? s.contactItemGray : s.contactItem}><img src={twitter} alt=""/>{
                  !props.profile.contacts.twitter ? "Twitter" : <a href={props.profile.contacts.twitter}>Twitter</a>}
                </div>


              </div>
              <div>
                <div className={!props.profile.contacts.instagram ? s.contactItemGray : s.contactItem}><img src={instagram} alt=""/>{
                  !props.profile.contacts.instagram ? "Instagram" :
                    <a href={props.profile.contacts.instagram}>Instagram</a>}</div>

                <div className={!props.profile.contacts.youtube ? s.contactItemGray : s.contactItem}><img src={youtube} alt=""/>{
                  !props.profile.contacts.youtube ? "YouTube" : <a href={props.profile.contacts.youtube}>YouTube</a>}
                </div>

                <div className={!props.profile.contacts.github ? s.contactItemGray : s.contactItem}><img src={git} alt=""/>{
                  !props.profile.contacts.github ? "GitHub" : <a href={props.profile.contacts.github}>GitHub</a>}</div>

                <div className={!props.profile.contacts.mainklink ? s.contactItemGray : s.contactItem}><img src={mainklink} alt=""/>{
                  !props.profile.contacts.mainklink ? "MainLink" :
                    <a href={props.profile.contacts.mainklink}>MainLink</a>}</div>
              </div>

            </div>

            <div className={s.job}>{props.profile.lookingForAJob && "Looking for a job: "}
              <span>{props.profile.lookingForAJobDescription}</span></div>


          </div>
        </div>
      </div>)

  }
}

export default ProfileInfo;