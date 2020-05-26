import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
    return (
      <div>
        <div className={s.friendAva}><img src={props.avatar} alt=""/></div>
        <div className={s.friendName}>{props.friendsName}</div>

      </div>
    )


}

export default Friends;