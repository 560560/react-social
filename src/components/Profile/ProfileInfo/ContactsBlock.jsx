import React from "react";
import s from "./ProfileInfo.module.css";
import facebook from "../../../assets/images/facebook.svg";
import website from "../../../assets/images/website.svg";
import vk from "../../../assets/images/vk.svg";
import twitter from "../../../assets/images/twitter.svg";
import instagram from "../../../assets/images/instagram.svg";
import youtube from "../../../assets/images/youtube.svg";
import git from "../../../assets/images/git.svg";
import mainklink from "../../../assets/images/mainklink.svg";


const ContactsBlock = ({profile}) => {

    return (

        <div className={s.about}>
            <div className={s.aboutMe}>About myself: {profile.aboutMe}</div>
            <div className={s.firstContactBlock}>

                {!profile.contacts.facebook
                    ? <div className={s.contactItemGray}><img src={facebook} alt=""/>"Facebook"</div>
                    : <div className={s.contactItem}><a href={profile.contacts.facebook}>Facebook</a></div>
                }

                {!profile.contacts.website
                    ? <div className={s.contactItemGray}><img src={website} alt=""/>"Website"</div>
                    : <div className={s.contactItem}><a href={profile.contacts.website}>Website</a></div>
                }


                <div className={!profile.contacts.vk ? s.contactItemGray : s.contactItem}>
                    <img src={vk} alt=""/>
                    {!profile.contacts.vk
                        ? "VK"
                        : <a href={profile.contacts.vk}>VK</a>}
                </div>

                <div className={!profile.contacts.twitter ? s.contactItemGray : s.contactItem}>
                    <img src={twitter} alt=""/>
                    {!profile.contacts.twitter
                        ? "Twitter"
                        : <a href={profile.contacts.twitter}>Twitter</a>}
                </div>
            </div>

            <div className={s.secondContactBlock}>
                <div className={!profile.contacts.instagram ? s.contactItemGray : s.contactItem}>
                    <img src={instagram} alt=""/>
                    {!profile.contacts.instagram
                        ? "Instagram"
                        : <a href={profile.contacts.instagram}>Instagram</a>}
                </div>

                <div className={!profile.contacts.youtube ? s.contactItemGray : s.contactItem}>
                    <img src={youtube} alt=""/>
                    {!profile.contacts.youtube
                        ? "YouTube"
                        : <a href={profile.contacts.youtube}>YouTube</a>}
                </div>

                <div className={!profile.contacts.github ? s.contactItemGray : s.contactItem}>
                    <img src={git} alt=""/>
                    {!profile.contacts.github
                        ? "GitHub"
                        : <a href={profile.contacts.github}>GitHub</a>}
                </div>

                <div className={!profile.contacts.mainklink ? s.contactItemGray : s.contactItem}>
                    <img src={mainklink} alt=""/>
                    {!profile.contacts.mainklink
                        ? "MainLink"
                        : <a href={profile.contacts.mainklink}>MainLink</a>}
                </div>
            </div>
        </div>

    )

}


export default ContactsBlock;