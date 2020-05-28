import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let sendMessage = () => {
    let text = newMessageElement.current.value;
    props.sendMessage(text);

  }

  let messageChange = () => {
    console.log(props.state.messageTexArea)
    let messageText = newMessageElement.current.value;
    props.updateTextareaMessages(messageText);
  }



  let messagesElements = props.state.messagesData.map(m => <Message messageItem={m.message} id={m.id}
                                                                    owner={m.owner}
                                                                    apponentsName={m.apponentsName}
                                                                    apponentsAva={m.apponentsAva}
                                                                    ownerAva={m.ownerAva}/>)

  let dialogsElements = props.state.dialogsData.map(m => <DialogItem name={m.name} id={m.id} avatar={m.avatar}/>)
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.dialogBlock}>
        {messagesElements}
        <div className={s.addMessage}>
          <textarea onChange={messageChange} ref={newMessageElement} value={props.state.messageTexArea}/>
          <button onClick={sendMessage}>Отправить</button>
        </div>
      </div>


    </div>
  );

}

export default Dialogs;