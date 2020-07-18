import React from 'react'
import s from "./Preloader.module.css";
import spinner from "./../../../assets/images/spinner.gif";

const Preloader = () => {

    return <div className={s.spinner}><img src={spinner} alt=""/></div>
}

export default Preloader;
