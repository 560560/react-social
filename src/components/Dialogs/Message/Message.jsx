import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={s.messages}>
          <div className={s.sender}>
            {props.owner === true ? <div className={s.senderProfile}><img src={props.ownerAva} alt=""/></div> : <div className={s.senderProfile}><img src={props.apponentsAva} alt=""/></div>}
            {props.owner === true ? <div className={s.senderProfile}>You</div> : <div className={s.senderProfile}>{props.apponentsName}</div>}

          </div>

            <div className={s.message}>{props.messageItem}</div>
        </div>

    )


}

export default Message;