import React from 'react';
import s from './Users.module.css';






const Users = (props) => {

  let makeFollow = () => {
    props.followTo(3);
  }
  let makeUnfollow = (userID) => {
    props.unfollowFrom(3)
  }

  let usersElements = props.users.map(u =>
    <div className={s.usersBlock}>
      <div className={s.userAva_followButton}>
        <div className={s.userAva}><img src={u.userAvatar} alt=""/></div>
        <div className={s.followUnfollowButton}>{(u.isFriend) ? <button onClick={makeUnfollow}>Unfollow</button> : <button onClick={makeFollow}>Follow</button>}</div>
      </div>
      <div className={s.userInfo}>
        <div className={s.userName}>{u.fullName}</div>
        <div className={s.country}>{u.location.country},</div>
        <div className={s.status}>{u.status}</div>
        <div className={s.city}>{u.location.city}</div>
      </div>
    </div>)




  return (
    <div>
      Users

      {usersElements}


    </div>

  )


}

export default Users;