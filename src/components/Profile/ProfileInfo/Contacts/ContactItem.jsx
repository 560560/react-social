import React from "react";
import s from "../ProfileInfo.module.css";


const ContactItem = ({contact, icon, contactName}) => {
    return (

        <>
            {!contact
                ? <div className={s.contactItemGray}><img src={icon} alt=""/>{contactName}</div>
                : <div className={s.contactItem}><img src={icon} alt=""/><a
                    href={contact}>{contactName}</a></div>
            }

        </>


    )
}
export default ContactItem