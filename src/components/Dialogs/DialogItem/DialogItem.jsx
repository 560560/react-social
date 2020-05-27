import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

  return (
    <div className={s.dialogItem}>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}><div className={s.avatar}><img src={props.avatar} alt=""/></div></NavLink>
      <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}><div className={s.minDialog}>{props.name}</div></NavLink>
    </div>
  )
}

export default DialogItem;
