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
import {Formik, Form, Field} from "formik"
import * as Yup from "yup";
import {setEditMode} from "../../../../redux/profile-reducer";


const ContactsBlockEditMode = ({profile, contactsFormSubmit, setEditMode}) => {

    let validationSchema = Yup.object({})

    let initValue = {
        fullName: "Samael",
        lookingForAJob: false,
        lookingForAJobDescription: "",
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainklink: ""
        }

    }


    return (
        <Formik initialValues={initValue} onSubmit={contactsFormSubmit} validationSchema={validationSchema}>
            <Form>
                <div className={s.about}>
                    <div className={s.aboutMe}>About me:
                        <Field as="textarea" name="aboutMe" id="aboutMe"
                               /*value={profile.aboutMe}*/ placeholder={"About me"}/></div>
                    <div className={s.firstContactBlock}>

                        <div className={s.contactItem}><img src={facebook} alt=""/>
                            <Field type="text" name="contacts.facebook" id="facebook" placeholder="Facebook contact"
                                   /*value={profile.contacts.facebook}*/ autoComplete="off"/>
                        </div>


                        <div className={s.contactItem}><img src={website} alt=""/>
                            <Field type="text" name="contacts.website" id="website" placeholder="Website url"
                                   /*value={profile.contacts.website}*/ autoComplete="off"/>
                        </div>


                        <div className={s.contactItem}><img src={vk} alt=""/>
                            <Field type="text" name="contacts.vk" id="vk" placeholder="VK contact"
                                  /* value={profile.contacts.vk}*/ autoComplete="off"/>
                        </div>

                        <div className={s.contactItem}><img src={twitter} alt=""/>
                            <Field type="text" name="contacts.twitter" id="twitter" placeholder="Twitter contact"
                                   /*value={profile.contacts.twitter}*/ autoComplete="off"/>
                        </div>

                    </div>

                    <div className={s.secondContactBlock}>

                        <div className={s.contactItem}><img src={instagram} alt=""/>
                            <Field type="text" name="contacts.instagram" id="instagram" placeholder="Instagram contact"
                                   /*value={profile.contacts.instagram}*/ autoComplete="off"/>
                        </div>

                        <div className={s.contactItem}><img src={youtube} alt=""/>
                            <Field type="text" name="contacts.youtube" id="youtube" placeholder="YouTube contact"
                                  /* value={profile.contacts.youtube} */autoComplete="off"/>
                        </div>

                        <div className={s.contactItem}><img src={git} alt=""/>
                            <Field type="text" name="contacts.github" id="github" placeholder="GitHub contact"
                                   /*value={profile.contacts.github}*/ autoComplete="off"/>
                        </div>

                        <div className={s.contactItem}><img src={mainklink} alt=""/>
                            <Field type="text" name="contacts.mainklink" id="mainklink" placeholder="MainLink contact"
                                   /*value={profile.contacts.mainklink}*/ autoComplete="off"/>
                        </div>


                    </div>
                </div>
                <div className={s.jobAndButtons}>
                    <div className={s.job}>
                        <label htmlFor="lookingForAJobTitle">Looking for a job:</label>
                        <Field type="checkbox" id="lookingForAJob" name="lookingForAJob"
                        /*value={profile.lookingForAJob}*//>
                        <div className={s.lookingJobInput}>
                            <Field type="text" name="lookingForAJobDescription" id="lookingForAJobDescription"
                                   placeholder="Job description"
                                  /* value={profile.lookingForAJobDescription}*/ autoComplete="off"/>
                        </div>

                    </div>

                    <div className={s.submitButton}>
                        <button type="submit">Save</button>
                    </div>
                    <div className={s.cancelButton}>
                        <button type="button" onClick={()=>setEditMode(false)}>Cancel</button>
                    </div>
                </div>
            </Form>
        </Formik>
    )

}


export default ContactsBlockEditMode;