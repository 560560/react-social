import {Field, reduxForm} from "redux-form";
import React from "react";
import s from './SendMessageForm.module.css';

const SendMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.addMessage}>
        <div><Field name={"messageText"} component="textarea" placeholder={"Your message"}/></div>
        <div><button>Send</button></div>
        <div></div>
      </div>
    </form>
  )
}

const SendMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(SendMessageForm)
export default SendMessageReduxForm