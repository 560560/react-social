import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={s.messages}>
      <div className={s.sender}>
        {props.owner === true ? <div className={s.senderAva}><img src={props.ownerAva} alt=""/></div> :
          <div className={s.senderAva}><img src={props.opponentsAva} alt=""/></div>}
        {props.owner === true ? <div className={s.senderName}>You</div> :
          <div className={s.senderName}>{props.opponentsName}</div>}

      </div>

      <div className={s.message}>
        <div></div>
        <div>{props.messageItem}</div>
      </div>
    </div>

  )


}

export default Message;