import React from 'react';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";


const User = ({user, ava_null, followingInProgress, follow, unfollow}) => {
    return (
        <div className={s.usersBlock}>
            <div className={s.userAva_followButton}>
                <div className={s.userAva}><NavLink to={"/profile/" + user.id}><img
                    src={user.photos.small === null ? ava_null : user.photos.small}
                    alt=""/></NavLink></div>
                <div className={s.followUnfollowButton}>{
                    user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {unfollow(user.id)}}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {follow(user.id)}}>Follow</button>}
                </div>
            </div>
            <div className={s.userInfo}>
                <div className={s.userName}>{user.name}</div>
                <div className={s.country}>{/*{user.location.country},*/}</div>
                <div className={s.status}>{user.status}</div>
                <div className={s.city}>{/*{user.location.city}*/}</div>
            </div>
        </div>)

}

export default User;