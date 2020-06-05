import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import ava_null from "../../assets/images/ava_null.png"

class Users extends React.Component {
  constructor(props) {
    super(props);

    axios.get("https://social-network.samuraijs.com/api/1.0/users?count=5&page=310")
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return <div>

      {
        this.props.users.map(u =>
          <div className={s.usersBlock} key={u.id}>
            <div className={s.userAva_followButton}>
              <div className={s.userAva}><img src={u.photos.small === null ? ava_null : u.photos.small} alt=""/></div>
              <div className={s.followUnfollowButton}>{u.followed ?
                <button onClick={() => {
                  this.props.unfollowFrom(u.id)
                }}>Unfollow</button> :
                <button onClick={() => {
                  this.props.followTo(u.id)
                }}>Follow</button>}
              </div>
            </div>
            <div className={s.userInfo}>
              <div className={s.userName}>{u.name}</div>
              <div className={s.country}>{/*{u.location.country},*/}</div>
              <div className={s.status}>{u.status}</div>
              <div className={s.city}>{/*{u.location.city}*/}</div>
            </div>
          </div>)
      }
    </div>
  }
}

export default Users;