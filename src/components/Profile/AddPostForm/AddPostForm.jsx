import {Field, reduxForm} from "redux-form";
import React from "react";
import s from './AddPostForm.module.css';
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 =  maxLengthCreator(10);


const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.addPost}>
        <div><Field name={"postText"} component={Textarea} placeholder={"Your post"}
                    validate={[required, maxLength10]}/></div>
        <div>
          <button>Send</button>
        </div>
        <div></div>
      </div>
    </form>
  )
}

const AddPostReduxForm = reduxForm({form: "profileAddMessageForm"})(AddPostForm)
export default AddPostReduxForm