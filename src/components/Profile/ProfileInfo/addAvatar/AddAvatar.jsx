import React, {useState, } from "react";
import s from "./AddAvatar.module.css"
import {Formik, Form} from "formik";
import Portal from "../../../Common/Portal/Portal";
import windowClose from "../../../../assets/images/windowclose.svg"

let initValue = {
    Avatar: {}
}


const AddAvatar = ({isOpen, setIsOpen, savePhoto, errorMessage, addPhotoError}) => {
    const [photoIsChosen, setPhotoIsChosen] = useState(false)

    const setPhoto = (e) => {
        initValue.Avatar = e.target.files[0];
        setPhotoIsChosen(true)
        addPhotoError(false, "")
    }

    return (
        <>
            {isOpen &&

            <Portal>
                <Formik initialValues={initValue} onSubmit={savePhoto}>
                    <Form>
                        <div className={s.modalOverlay} onClick={() => setIsOpen(false)}>
                        </div>
                        <div className={s.modalWindow}>
                            <div className={s.modalHeader}>
                                <div className={s.modalTitle}><label htmlFor="photo">Uploading new photo</label></div>
                                <div className={s.modalCloseIcon}><img src={windowClose}
                                                                       onClick={() => setIsOpen(false)} alt=""/>
                                </div>
                            </div>

                            {errorMessage
                            && <div className={s.wrongImage}>{errorMessage}</div>
                            }

                            <div className={s.modalBody}>
                                <input id="photo" name="photo" type="file" onChange={setPhoto}/>
                            </div>

                            <div className={s.modalFooter}>
                                <div className={s.submitButton}>
                                    <button disabled={!photoIsChosen} type='submit'>Apply</button>
                                </div>
                                <div className={s.cancelButton}>
                                    <button onClick={() => setIsOpen(false)} type='button'>Cancel</button>
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