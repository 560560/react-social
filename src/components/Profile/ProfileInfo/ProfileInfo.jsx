import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import website from "./../../../assets/images/website.svg"
import instagram from "./../../../assets/images/instagram.svg"
import twitter from "./../../../assets/images/twitter.svg"
import vk from "./../../../assets/images/vk.svg"
import facebook from "./../../../assets/images/facebook.svg"
import github from "./../../../assets/images/github.svg"
import youtube from "./../../../assets/images/youtube.svg"
import mainklink from "./../../../assets/images/mainklink.svg"


const ProfileInfo = (props) => {

  if (!props.profile ) {
    return <Preloader />
  }
  else {
    return (
        <div>
            <div className={s.profileBackground}>
                <img src="http://9878621572.myjino.ru/img/sea.jpg" alt=""/>
            </div>
            <div className={s.profileInfo}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large} alt=""/>
                    <div className={s.sendMessageButton}><button >Send message</button></div>
                  <div className={s.follow}><button >Follow</button></div>
                </div>
                <div className={s.description}>

                  <div className={s.userName_status}>
                    <div className={s.userName}>{props.profile.fullName}</div>
                    <div className={s.status}>{props.profile.aboutMe}</div>
                  </div>

                  <div className={s.contacts}>
                    <div>
                      <div className={s.contactItem}><img src={facebook} alt=""/>{
                        !props.profile.contacts.facebook ? "Facebook" : <a href={props.profile.contacts.facebook}>Facebook</a>}</div>
                      <div className={s.contactItem}><img src={website} alt=""/>{
                        !props.profile.contacts.website ? "website" : <a href={props.profile.contacts.website}>Website</a>}</div>
                      <div className={s.contactItem}><img src={twitter} alt=""/>{
                        !props.profile.contacts.twitter ? "twitter" : <a href={props.profile.contacts.twitter}>Twitter</a>}</div>
                      <div className={s.contactItem}><img src={instagram} alt=""/>{
                        !props.profile.contacts.instagram ? "instagram" : <a href={props.profile.contacts.instagram}>Instagram</a>}</div>

                    </div>
                    <div>
                      <div className={s.contactItem}><img src={facebook} alt=""/>{
                        !props.profile.contacts.facebook ? "Facebook" : <a href={props.profile.contacts.facebook}>Facebook</a>}</div>
                      <div className={s.contactItem}><img src={facebook} alt=""/>{
                        !props.profile.contacts.facebook ? "Facebook" : <a href={props.profile.contacts.facebook}>Facebook</a>}</div>
                      <div className={s.contactItem}><img src={facebook} alt=""/>{
                        !props.profile.contacts.facebook ? "Facebook" : <a href={props.profile.contacts.facebook}>Facebook</a>}</div>
                      <div className={s.contactItem}><img src={facebook} alt=""/>{
                        !props.profile.contacts.facebook ? "Facebook" : <a href={props.profile.contacts.facebook}>Facebook</a>}</div>
                    </div>

                  </div>


                  </div>
            </div>
        </div>)

  }
}

export default ProfileInfo;