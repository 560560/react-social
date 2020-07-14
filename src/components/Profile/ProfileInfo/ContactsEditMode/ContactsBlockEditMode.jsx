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
import ContactItemEditMode from "./ContactItemEditMode";


const ContactsBlockEditMode = ({profile}) => {

    return (

        <div className={s.about}>
            <div className={s.aboutMe}>About myself: {profile.aboutMe}</div>
            <div className={s.firstContactBlock}>

                <ContactItemEditMode icon={facebook} contact={profile.contacts.facebook} contactName="Facebook"/>
                <ContactItemEditMode icon={website} contact={profile.contacts.website} contactName="Website"/>
                <ContactItemEditMode icon={vk} contact={profile.contacts.vk} contactName="VK"/>
                <ContactItemEditMode icon={twitter} contact={profile.contacts.twitter} contactName="Twitter"/>

            </div>

            <div className={s.secondContactBlock}>

                <ContactItemEditMode icon={instagram} contact={profile.contacts.instagram} contactName="Instagram"/>
                <ContactItemEditMode icon={youtube} contact={profile.contacts.youtube} contactName="YouTube"/>
                <ContactItemEditMode icon={git} contact={profile.contacts.github} contactName="GitHub"/>
                <ContactItemEditMode icon={mainklink} contact={profile.contacts.mainklink} contactName="MainLink"/>

            </div>
        </div>

    )

}


export default ContactsBlockEditMode;