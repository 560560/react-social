import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dialogsData = [
    {id: 1, name: "Anton"},
    {id: 2, name: "Elena"},
    {id: 3, name: "Mihail"},
    {id: 4, name: "Kseniya"}
]
let dialogsElements = dialogsData.map(m => <DialogItem name={m.name} id={m.id}/>)

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "How is your IT-KAMASUTRA?"},
    {id: 4, message: "Best Regards!"}
]
let messagesElements = messagesData.map(m => <Message messageItem={m.message} id={m.id}/>)

const Dialogs = (props) => {
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