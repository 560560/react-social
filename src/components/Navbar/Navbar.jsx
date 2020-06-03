import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";


const Navbar = (props) => {



  let listOfFriends = props.friendsData.map(f => <Friends key={f.id} id={f.id} friendsName={f.friendsName} avatar={f.avatar}/>)

  return (
    <div className={s.leftSide}>
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>

      </nav>

      <div className={s.friendsModule}>
        <h2>Friends</h2>
        <div className={s.friendslist}>
          {listOfFriends}
        </div>
      </div>

    </div>

  )
}

export default Navbar;