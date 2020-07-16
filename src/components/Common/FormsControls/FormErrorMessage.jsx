import React from "react";
import s from "./FormErrorMessage.module.css"
import errorArrow from "./../../../assets/images/errorArrow.svg"


const FormErrorMessage = (props) => {
    return (

        <div className={s.errorMessageBlock}>
           <span> {props.id !== "noArrow" && <img src={errorArrow} alt=""/>} <span>{props.children}</span></span>
        </div>

    )


}

export default FormErrorMessage