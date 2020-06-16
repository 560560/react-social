import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="http://9878621572.myjino.ru/img/logo.svg" alt=""/>
      <div className={s.loginBlock}>
        {props.isAuth ?
          (<div className={s.logined}><NavLink to={`/profile/${props.login}`}>{props.login}</NavLink>
            <span onClick={props.loginOut}>Logout</span></div>)
          : <div className={s.unlogined}><NavLink to={'/login'}>Login</NavLink></div>}

      </div>
    </header>)


}

export default Header;