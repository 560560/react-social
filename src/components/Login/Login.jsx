import React from "react";
/*import LoginReduxForm from "./LoginForm";*/
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";

const Login = ({loginMe, isAuth, myId, wrongAuth, errorMessage}) => {
  const onSubmit = (formData) => {
    loginMe(formData.login, formData.password, formData.rememberMe)
  }
  if(isAuth && myId) return <Redirect to={`/profile`} />
  return (
    <div>
      <h1>Login</h1>
     <LoginForm onSubmit={onSubmit} wrongAuth={wrongAuth} errorMessage={errorMessage}/>

    </div>

  )
}

export default Login
