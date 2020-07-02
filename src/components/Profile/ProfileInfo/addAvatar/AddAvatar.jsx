import React from "react";
import s from "./AddAvatar.module.css"
import {Formik, Form, Field, ErrorMessage} from "formik";
import FormErrorMessage from "../../../Common/FormsControls/FormErrorMessage";
import Portal from "../../../Common/Portal/Portal";
import windowClose from "../../../../assets/images/windowclose.svg"

let initValue = {
    Photo: {}
}

const setPhoto = (e) => {
    initValue.Photo = e.target.files[0]
}

const AddAvatar = ({isOpen, setIsOpen, savePhoto}) => {

    return (
        <>
            {isOpen &&

            <Portal>
                <Formik initialValues={initValue} onSubmit={savePhoto}>
                    <Form>
                        <div className={s.modalOverlay}>
                            <div className={s.modalWindow}>
                                <div className={s.modalHeader}>
                                    <div className={s.modalTitle}><label htmlFor="login">Uploading new photo</label></div>
                                    <div className={s.modalCloseIcon}><img src={windowClose}
                                                                           onClick={() => setIsOpen(false)} alt=""/>
                                    </div>
                                </div>

                                <div className={s.modalBody}>
                                    <input id="photo" name="photo" type="file" onChange={setPhoto}/>
                                </div>

                                <div className={s.modalFooter}>
                                    <div className={s.submitButton}>
                                        <button type='submit'>Apply</button>
                                    </div>
                                    <div className={s.cancelButton}>
                                        <button onClick={() => setIsOpen(false)} type='button'>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </Portal>
            }

        </>
    )


}

export default AddAvatar;