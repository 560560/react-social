import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import SendMessageForm from "./SendMessageForm/SendMessageForm";


const Dialogs = ({sendMessage, messagesData, dialogsData}) => {

  let addNewMessage = (formData) => {
    sendMessage(formData.messageText)
  }


  let messagesElements = messagesData.map(m => <Message key={m.id}
                                                              messageItem={m.message}
                                                              id={m.id}
                                                              owner={m.owner}
                                                              opponentsName={m.opponentsName}
                                                              opponentsAva={m.opponentsAva}
                                                              ownerAva={m.ownerAva}/>)

  let dialogsElements = dialogsData.map(d => <DialogItem key={d.id}
                                                               name={d.name}
                                                               id={d.id}
                                                               avatar={d.avatar}/>)
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messagesBlock}>
        {messagesElements}
        <div><SendMessageForm onSubmit={addNewMessage}/></div>
      </div>
    </div>
  );

}

export default Dialogs;