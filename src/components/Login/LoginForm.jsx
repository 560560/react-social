import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator (10);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
    <div><Field name={"login"} component={Input} placeholder={"Login"}
                validate={[required, maxLength10]}/> </div>
    <div><Field name={"password"} component={Input} placeholder={"Password"}
                validate={[required, maxLength10]}/> </div>
    <div><Field name={"rememberMe"} component={Input} type="checkbox"/>Remember me</div>
    <div><button>Login</button></div>
  </form>
  )

}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
export default LoginReduxForm