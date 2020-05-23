import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    Anton
                </div>
                <div className={s.dialog}>
                    Elena
                </div>
                <div className={s.dialog}>
                    Mihail
                </div>
                <div className={s.dialog}>
                    Aleksey
                </div>
                <div className={s.dialog}>

                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo!</div>
            </div>
        </div>

    );

}

export default Dialogs;