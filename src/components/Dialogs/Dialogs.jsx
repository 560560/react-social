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

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "How is your IT-KAMASUTRA?"},
    {id: 4, message: "Best Regards!"}
]

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>

            </div>
            <div className={s.messages}>
                <Message messageItem={messagesData[0].message} id={messagesData[0].id}/>
                <Message messageItem={messagesData[1].message} id={messagesData[1].id}/>
                <Message messageItem={messagesData[2].message} id={messagesData[2].id}/>
                <Message messageItem={messagesData[0].message} id={messagesData[3].id}/>

            </div>
        </div>
    );

}

export default Dialogs;