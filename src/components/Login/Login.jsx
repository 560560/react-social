import React from "react";
import LoginReduxForm from "./LoginForm";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginMe({email: formData.login, password: formData.password, rememberMe: formData.rememberMe})
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>

    </div>

  )
}

export default Login
