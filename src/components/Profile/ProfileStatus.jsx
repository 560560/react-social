import React, {useEffect, useState} from "react";
import s from './ProfileInfo/ProfileInfo.module.css';

const ProfileStatus = (props) => {

    let [status, setStatus] = useState(props.status)
    let [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const enableEditMode = () => {
        setEditMode(true)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    const disableEditMode = () => {
        props.updateUserStatus(status)
        setEditMode(false)

    }
    return (
        <div className={s.status}>
        {!props.status && !editMode && <span onClick={enableEditMode}>Change status</span>}
        {!editMode && <span onClick={enableEditMode}>{props.status}</span>}

    {editMode &&
    <input value={status}
           autoFocus={true}
           onChange={onStatusChange}
           onBlur={disableEditMode} type="text"/>}
        </div>
    )
}

export default ProfileStatus