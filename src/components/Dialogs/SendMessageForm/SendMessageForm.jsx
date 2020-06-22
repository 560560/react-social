
import React from "react";
import s from './SendMessageForm.module.css';
import * as Yup from "yup"
import {Formik, Form, Field, ErrorMessage} from "formik"
import FormErrorMessage from "../../Common/FormsControls/FormErrorMessage";

let initValue = {
  messageText: ""
}

let validationSchema = Yup.object({
  messageText: Yup.string().max(10, "Message must not exceed 10 characters")
  }
)



const SendMessageForm = (props) => {
  return (

    <Formik onSubmit={props.onSubmit} initialValues={initValue} validationSchema={validationSchema}>

      <Form>
        <div className={s.addMessage}>
        <Field as="textarea" name="messageText" id="messageText" placeholder="Enter your message"/>
        <ErrorMessage name="messageText" component={FormErrorMessage}/>
        </div>

        <div className={s.button}>
          <button>Send message</button>
        </div>

      </Form>


    </Formik>


  )}
export default SendMessageForm