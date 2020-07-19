import React from "react";
/*import LoginReduxForm from "./LoginForm";*/
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";

const Login = ({loginMe, isAuth, myId, wrongAuth, errorMessage, isLogining}) => {
  const onSubmit = (formData) => {
    loginMe(formData.login, formData.password, formData.rememberMe)
  }
  if(isAuth && myId) return <Redirect to={`/profile`} />
  return (
    <div>
     <LoginForm onSubmit={onSubmit} wrongAuth={wrongAuth} errorMessage={errorMessage} isLogining={isLogining}/>

    </div>

  )
}

export default Login
