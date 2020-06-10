import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import website from "./../../../assets/images/website.svg"
import instagram from "./../../../assets/images/instagram.svg"
import twitter from "./../../../assets/images/twitter.svg"
import vk from "./../../../assets/images/vk.svg"
import facebook from "./../../../assets/images/facebook.svg"
import gitHub from "./../../../assets/images/gitHub.svg"
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
                      <div className={!props.profile.contacts.facebook ? s.contactIconNull : s.contactIcon}><img src={facebook} alt=""/>Facebook</div>
                      <div className={!props.profile.contacts.facebook ? s.contactIconNull : s.contactIcon}><img src={website} alt=""/>Website</div>
                      <div className={!props.profile.contacts.facebook ? s.contactIconNull : s.contactIcon}><img src={vk} alt=""/>VK</div>
                      <div className={!props.profile.contacts.facebook ? s.contactIconNull : s.contactIcon}><img src={twitter} alt=""/>Twitter</div>
                    </div>
                    <div>
                      <div className={!props.profile.contacts.facebook ? s.contactIconNull : s.contactIcon}><img src={instagram} alt=""/>Instagram</div>
                      <div className={!props.profile.contacts.facebook ? s.contactIconNull : s.contactIcon}><img src={youtube} alt=""/>YouTube</div>
                      <div className={!props.profile.contacts.facebook ? s.contactIconNull : s.contactIcon}><img src={gitHub} alt=""/>GitHub</div>
                      <div className={!props.profile.contacts.facebook ? s.contactIconNull : s.contactIcon}><img src={mainklink} alt=""/>MainLink</div>
                    </div>

                  </div>


                  </div>
            </div>
        </div>)

  }
}

export default ProfileInfo;