import {Field, reduxForm} from "redux-form";
import React from "react";
import s from './AddPostForm.module.css';

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.addPost}>
        <div><Field name={"postText"} component="textarea" placeholder={"Your post"}/></div>
        <div><button>Send</button></div>
        <div></div>
      </div>
    </form>
  )
}

const AddPostReduxForm = reduxForm({form: "profileAddMessageForm"})(AddPostForm)
export default AddPostReduxForm