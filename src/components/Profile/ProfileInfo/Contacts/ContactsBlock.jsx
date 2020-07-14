import React from "react";
import s from "../ProfileInfo.module.css";
import facebook from "../../../../assets/images/facebook.svg";
import website from "../../../../assets/images/website.svg";
import vk from "../../../../assets/images/vk.svg";
import twitter from "../../../../assets/images/twitter.svg";
import instagram from "../../../../assets/images/instagram.svg";
import youtube from "../../../../assets/images/youtube.svg";
import git from "../../../../assets/images/git.svg";
import mainklink from "../../../../assets/images/mainklink.svg";
import ContactItem from "./ContactItem";


const ContactsBlock = ({profile}) => {

    return (
        <>
            <div className={s.about}>
                <div className={s.aboutMe}>About myself: {profile.aboutMe}</div>
                <div className={s.firstContactBlock}>

                    <ContactItem icon={facebook} contact={profile.contacts.facebook} contactName="Facebook"/>
                    <ContactItem icon={website} contact={profile.contacts.website} contactName="Website"/>
                    <ContactItem icon={vk} contact={profile.contacts.vk} contactName="VK"/>
                    <ContactItem icon={twitter} contact={profile.contacts.twitter} contactName="Twitter"/>

                </div>

                <div className={s.secondContactBlock}>

                    <ContactItem icon={instagram} contact={profile.contacts.instagram} contactName="Instagram"/>
                    <ContactItem icon={youtube} contact={profile.contacts.youtube} contactName="YouTube"/>
                    <ContactItem icon={git} contact={profile.contacts.github} contactName="GitHub"/>
                    <ContactItem icon={mainklink} contact={profile.contacts.mainklink} contactName="MainLink"/>

                </div>
            </div>


            <div className={s.job}>{profile.lookingForAJob && "Looking for a job: "}
                <span>{profile.lookingForAJobDescription}</span></div>
        </>
    )

}


export default ContactsBlock;