import React from "react";
import s from "./Message.module.css";

const Message = ({owner, ownerAva, opponentsAva, opponentsName, messageItem}) => {
  return (
    <div className={s.messages}>
      <div className={s.sender}>
        {owner === true
            ? <div className={s.senderAva}><img src={ownerAva} alt=""/></div>
            : <div className={s.senderAva}><img src={opponentsAva} alt=""/></div>}
        {owner === true
            ? <div className={s.senderName}>You</div>
            : <div className={s.senderName}>{opponentsName}</div>}

      </div>

      <div className={s.message}>
        <div></div>
        <div>{messageItem}</div>
      </div>
    </div>

  )


}

export default Message;