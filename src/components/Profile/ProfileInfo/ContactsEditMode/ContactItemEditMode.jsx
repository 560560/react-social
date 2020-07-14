import React from "react";
import s from "../ProfileInfo.module.css";



const ContactItemEditMode = ({contact, icon, contactName}) => {
    return (

        <>
            {!contact
                ? <div className={s.contactItemGray}><img src={icon} alt=""/>
                    <input type="text" name={contact} placeholder={`${contactName} contact`}/>
            </div>
                : <div className={s.contactItem}><img src={icon} alt=""/>
                    <input type="text" name={contact} placeholder={`${contact} contact`}/>

                  </div>
            }

        </>


    )
}
export default ContactItemEditMode