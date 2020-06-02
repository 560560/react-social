import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageActionCreater, updateTextareaMessagesActionCreater} from "../../redux/dialogs-reducer";


const DialogsContainer = (props) => {

  let state = props.store.getState();
  let messageChange = (messageText) => {
    let action = updateTextareaMessagesActionCreater(messageText);
    props.store.dispatch(action);
  }
  let sendMessage = () => {
    let action = sendMessageActionCreater();
    props.store.dispatch(action);
  }

  return (
    <Dialogs messagesData={state.dialogsPage.messagesData}
             dialogsData={state.dialogsPage.dialogsData}
             messageTexArea={state.dialogsPage.messageTexArea}
             messageChange={messageChange}
             sendMessage={sendMessage}/>
  );
}

export default DialogsContainer;