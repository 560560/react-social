import {Field, reduxForm} from "redux-form";
import React from "react";
import s from './SendMessageForm.module.css';
import {Textarea} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength10 =  maxLengthCreator(10);
const SendMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.addMessage}>
        <div><Field name={"messageText"} component={Textarea} placeholder={"Your message"}
                    validate={[required, maxLength10]}/></div>
        <div>
          <button>Send</button>
        </div>
        <div></div>
      </div>
    </form>
  )
}

const SendMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(SendMessageForm)
export default SendMessageReduxForm