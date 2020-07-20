import React from "react";
import s from "./Login.module.css"
import * as Yup from "yup"
import {Formik, Form, Field, ErrorMessage} from "formik"
import FormErrorMessage from "../Common/FormsControls/FormErrorMessage";

let validationSchema = Yup.object({
    login: Yup.string().required("Please enter your e-mail").email("Invalid email format"),
    password: Yup.string().required("Please enter your password")
})
let initValue = {
    login: "",
    password: "",
    rememberMe: false
}

const LoginForm = ({wrongAuth, onSubmit, errorMessage, isLogining}) => {

    return (
        <div className={s.loginFormWrapper}>
            <div className={s.loginFormContent}>
                <h1>Login</h1>
                <Formik initialValues={initValue}
                        validationSchema={validationSchema}
                        onSubmit={
                            (values) => {
                                onSubmit(values)
                            }
                        }>

                    {() => (
                        <Form>

                            <div className={s.login}>
                                <label htmlFor="login">Login</label>
                                <Field type="text"
                                       name="login"
                                       id="login"
                                       placeholder="Your e-mail"
                                       autocomplete="username"/>
                                <ErrorMessage name="login" component={FormErrorMessage}/>
                            </div>

                            <div className={s.password}>
                                <label htmlFor="password">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Your password"
                                    autoComplete="current-password"/>
                                <ErrorMessage name="password" component={FormErrorMessage}/>
                            </div>

                            <div className={s.comboButton}>
                                <label htmlFor="rememberMe">Remember me</label>
                                <Field type="checkbox" id="rememberMe" name="rememberMe"/>
                                <div className={s.button}>
                                    <button disabled={isLogining} type='submit'>Login</button>
                                </div>
                            </div>

                            {wrongAuth ? <div className={s.wrongAuth}>{errorMessage}</div> : null}

                        </Form>)
                    }
                </Formik>
            </div>
        </div>
    )

}

export default LoginForm