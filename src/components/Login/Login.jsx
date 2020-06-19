import React from "react";
/*import LoginReduxForm from "./LoginForm";*/
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginMe(formData.login, formData.password, formData.rememberMe)
  }
  if(props.isAuth && props.myId) return <Redirect to={`/profile/${props.myId}`} />
  return (
    <div>
      <h1>Login</h1>
     <LoginForm onSubmit={onSubmit} wrongAuth={props.wrongAuth} errorMessage={props.errorMessage}/>

    </div>

  )
}

export default Login
