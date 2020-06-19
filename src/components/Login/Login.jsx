import React from "react";
/*import LoginReduxForm from "./LoginForm";*/
import LoginForm from "./LoginForm";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginMe(formData.login, formData.password, formData.rememberMe)
  }
  return (
    <div>
      <h1>Login</h1>
     <LoginForm onSubmit={onSubmit}/>

    </div>

  )
}

export default Login
