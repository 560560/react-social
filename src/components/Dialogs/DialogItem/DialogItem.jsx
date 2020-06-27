import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = ({id, avatar, name}) => {

  return (
    <div className={s.dialogItem}>
      <NavLink to={`/dialogs/${id}`} activeClassName={s.active}><div className={s.avatar}><img src={avatar} alt=""/></div></NavLink>
      <NavLink to={`/dialogs/${id}`} activeClassName={s.active}><div className={s.minDialog}>{name}</div></NavLink>
    </div>
  )
}

export default DialogItem;
