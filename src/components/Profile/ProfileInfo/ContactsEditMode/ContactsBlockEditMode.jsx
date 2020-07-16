import React from "react";
import s from "../ProfileInfo.module.css";
import facebook from "../../../../assets/images/facebook.svg";
import website from "../../../../assets/images/website.svg";
import vk from "../../../../assets/images/vk.svg";
import twitter from "../../../../assets/images/twitter.svg";
import instagram from "../../../../assets/images/instagram.svg";
import youtube from "../../../../assets/images/youtube.svg";
import git from "../../../../assets/images/git.svg";
import mainlink from "../../../../assets/images/mainlink.svg";
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup";
import FormErrorMessage from "../../../Common/FormsControls/FormErrorMessage";
import errorUpArrow from "../../../../assets/images/errorUpArrow.svg";

const ContactFormErrorMessage = (props) => {
    return (
        <div className={s.errorAboutMe}>
            <div><img src={errorUpArrow} alt=""/></div>
            <div><span>{props.children}</span></div>
        </div>
    )
}


const ContactsBlockEditMode = ({profile, contactsFormSubmit, setProfileEditMode}) => {

    let validationSchema = Yup.object({
        fullName: Yup.string().required("Please enter your name").max(14, "Name must not exceed 14 characters"),
        lookingForAJobDescription: Yup.string().required("Please enter job description"),
        aboutMe: Yup.string().required("Please enter a couple words about yourself"),
        contacts: Yup.object({
            facebook: Yup.string().url("Please enter valid Facebook url address"),
            website: Yup.string().url("Please enter valid Website url address"),
            vk: Yup.string().url("Please enter valid VK url address"),
            twitter: Yup.string().url("Please enter valid Twitter url address"),
            instagram: Yup.string().url("Please enter valid Instagram url address"),
            youtube: Yup.string().url("Please enter valid YouTube url address"),
            github: Yup.string().url("Please enter valid GitHub url address"),
            mainLink: Yup.string().url("Please enter valid mainLink url address")
        })

    })

    let initValue = {
        fullName: profile.fullName,
        lookingForAJob: profile.lookingForAJob,
        lookingForAJobDescription: profile.lookingForAJobDescription,
        aboutMe: profile.aboutMe,
        contacts: {
            facebook: profile.contacts.facebook,
            website: profile.contacts.website,
            vk: profile.contacts.vk,
            twitter: profile.contacts.twitter,
            instagram: profile.contacts.instagram,
            youtube: profile.contacts.youtube,
            github: profile.contacts.github,
            mainLink: profile.contacts.mainLink
        }

    }


    return (
        <Formik initialValues={initValue} onSubmit={contactsFormSubmit} validationSchema={validationSchema}>
            <Form>
                <div className={s.fullNameInput}>
                    <Field type="text" name="fullName"
                           id="fullName"
                           placeholder="Your name"
                           autoComplete="off"/>
                    <div className={s.errorFullName}><ErrorMessage name="fullName" component={FormErrorMessage}/></div>
                </div>
                <div className={s.about}>
                    <div className={s.aboutMe}>About me:
                        <Field as="textarea" name="aboutMe" id="aboutMe"
                               placeholder={"About me"}/></div>
                    <ErrorMessage className={s.errorAboutMe} name="aboutMe" id="noArrow"
                                  component={ContactFormErrorMessage}/>
                    <div className={s.firstContactBlock}>

                        <div className={s.contactItem}><img src={facebook} alt=""/>
                            <Field type="text" name="contacts.facebook" id="facebook" placeholder="Facebook contact"
                                   autoComplete="off"/>
                            <div className={s.contactsBottomErrorMessage}><ErrorMessage name="contacts.facebook"
                                                                                        id="noArrow"
                                                                                        component={FormErrorMessage}/>
                            </div>
                        </div>


                        <div className={s.contactItem}><img src={website} alt=""/>
                            <Field type="text" name="contacts.website" id="website" placeholder="Website url"
                                   autoComplete="off"/>
                            <div className={s.contactsBottomErrorMessage}><ErrorMessage name="contacts.website"
                                                                                        id="noArrow"
                                                                                        component={FormErrorMessage}/>
                            </div>
                        </div>


                        <div className={s.contactItem}><img src={vk} alt=""/>
                            <Field type="text" name="contacts.vk" id="vk" placeholder="VK contact"
                                   autoComplete="off"/>
                            <div className={s.contactsBottomErrorMessage}><ErrorMessage name="contacts.vk"
                                                                                        id="noArrow"
                                                                                        component={FormErrorMessage}/>
                            </div>
                        </div>

                        <div className={s.contactItem}><img src={twitter} alt=""/>
                            <Field type="text" name="contacts.twitter" id="twitter"
                                   placeholder="Twitter contact"
                                   autoComplete="off"/>
                            <div className={s.contactsBottomErrorMessage}><ErrorMessage
                                name="contacts.twitter" id="noArrow" component={FormErrorMessage}/></div>
                        </div>

                    </div>

                    <div className={s.secondContactBlock}>

                        <div className={s.contactItem}><img src={instagram} alt=""/>
                            <Field type="text" name="contacts.instagram" id="instagram"
                                   placeholder="Instagram contact"
                                   autoComplete="off"/>
                            <div className={s.contactsBottomErrorMessage}><ErrorMessage
                                name="contacts.instagram" id="noArrow" component={FormErrorMessage}/></div>
                        </div>

                        <div className={s.contactItem}><img src={youtube} alt=""/>
                            <Field type="text" name="contacts.youtube" id="youtube"
                                   placeholder="YouTube contact"
                                   autoComplete="off"/>
                            <div className={s.contactsBottomErrorMessage}><ErrorMessage
                                name="contacts.youtube" id="noArrow" component={FormErrorMessage}/></div>
                        </div>

                        <div className={s.contactItem}><img src={git} alt=""/>
                            <Field type="text" name="contacts.github" id="github"
                                   placeholder="GitHub contact"
                                   autoComplete="off"/>
                            <div className={s.contactsBottomErrorMessage}><ErrorMessage
                                name="contacts.github" id="noArrow"
                                component={FormErrorMessage}/></div>
                        </div>

                        <div className={s.contactItem}><img src={mainlink} alt=""/>
                            <Field type="text" name="contacts.mainLink" id="mainlink"
                                   placeholder="MainLink contact"
                                   autoComplete="off"/>
                            <div className={s.contactsBottomErrorMessage}><ErrorMessage
                                name="contacts.mainLink" id="noArrow"
                                component={FormErrorMessage}/></div>
                        </div>


                    </div>
                </div>
                <div className={s.jobAndButtons}>
                    <div className={s.job}>
                        <label htmlFor="lookingForAJobTitle">Looking for a job:</label>
                        <Field type="checkbox" id="lookingForAJob" name="lookingForAJob"/>
                        <div className={s.lookingJobInput}>
                            <Field type="text" name="lookingForAJobDescription"
                                   id="lookingForAJobDescription"
                                   placeholder="Job description"
                                   autoComplete="off"/>
                            <div className={s.errorJobDescription}><ErrorMessage
                                name="lookingForAJobDescription"
                                component={FormErrorMessage}/></div>
                        </div>

                    </div>

                    <div className={s.submitButton}>
                        <button type="submit">Save</button>
                    </div>
                    <div className={s.cancelButton}>
                        <button type="button" onClick={() => setProfileEditMode(false)}>Cancel
                        </button>
                    </div>
                </div>
            </Form>
        </Formik>
    )

}


export default ContactsBlockEditMode;