import React from 'react';
import s from './Users.module.css';


const Users = (props) => {


    let makeFollow = (event) => {

        props.followTo(Number(event.target.id));
    }
    let makeUnfollow = (event) => {

        props.unfollowFrom(Number(event.target.id))
    }
    let usersElements = props.users.map(u => 
        <div className={s.usersBlock}>
            <div className={s.userAva_followButton}>
                <div className={s.userAva}><img src={u.userAvatar} alt=""/></div>
                <div className={s.followUnfollowButton}>{(u.isFriend) ?
                    <button onClick={makeUnfollow}  id={u.id}>Unfollow</button> :
                    <button onClick={makeFollow}  id={u.id}>Follow</button>}</div>
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