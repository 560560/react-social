import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreater, updateTextareaMessagesActionCreater} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

  let newMessageElement = React.createRef();

  let messageChange = () => {
    let messageText = newMessageElement.current.value;
    props.messageChange(messageText);
  }

  let sendMessage = () => {
    props.sendMessage()
  }

  let messagesElements = props.messagesData.map(m => <Message key={m.id}
                                                              messageItem={m.message}
                                                              id={m.id}
                                                              owner={m.owner}
                                                              opponentsName={m.opponentsName}
                                                              opponentsAva={m.opponentsAva}
                                                              ownerAva={m.ownerAva}/>)

  let dialogsElements = props.dialogsData.map(d => <DialogItem key={d.id}
                                                               name={d.name}
                                                               id={d.id}
                                                               avatar={d.avatar}/>)
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.dialogBlock}>
        {messagesElements}
        <div className={s.addMessage}>
          <textarea onChange={messageChange}
                    ref={newMessageElement}
                    value={props.messageTexArea}
                    placeholder="Your message"/>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>


    </div>
  );

}

export default Dialogs;