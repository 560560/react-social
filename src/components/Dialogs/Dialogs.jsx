import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let messagesElements = props.state.messagesData.map(m => <Message messageItem={m.message} id={m.id}/>)
    let dialogsElements = props.state.dialogsData.map(m => <DialogItem name={m.name} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );

}

export default Dialogs;