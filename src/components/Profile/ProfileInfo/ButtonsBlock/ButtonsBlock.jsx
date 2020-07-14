import React from "react";
import s from "../ProfileInfo.module.css";
import AddAvatar from "../addAvatar/AddAvatar";



const ButtonsBlock = ({
                          userId,  isFollowed, followFromProfile,isOpen, setIsOpen, setEditPageMode,
                          setNewContacts, unfollowFromProfile, isOwner, savePhoto, errorMessage,
                          addPhotoError, editPageMode
                      }) => {

    return (
        <>

            {(isOwner)
                ? <div>
                    {!editPageMode
                        ? <div className={s.editPage}>
                            <button onClick={() => setEditPageMode(!editPageMode)}>Edit page</button>
                        </div>
                        : <div className={s.editPage}>
                            <button onClick={setNewContacts}>Save page</button>
                        </div>

                    }

                    <div className={s.addPhoto}>
                        <button onClick={() => setIsOpen(true)}>Add photo</button>
                        <AddAvatar isOpen={isOpen} setIsOpen={setIsOpen} savePhoto={savePhoto}
                                   errorMessage={errorMessage} addPhotoError={addPhotoError}/>
                    </div>
                </div>
                : <div>
                    <div className={s.sendMessageButton}>
                        <button>Send message</button>
                    </div>
                    {isFollowed
                        ? <div className={s.isFollow}>
                            <button onClick={() => {
                                unfollowFromProfile(userId)
                            }}>Unfollow
                            </button>
                        </div>
                        : <div className={s.isNotFollow}>
                            <button onClick={() => {
                                followFromProfile(userId)
                            }}>Follow
                            </button>
                        </div>}
                </div>
            }

        </>
    )

}


export default ButtonsBlock