import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logoutHover from "./../../assets/images/logout_hover.svg"

const Header = ({isAuth, login, loginOut, myId}) => {
  return (
    <header className={s.header}>
     <div className={s.logo}> <img src="http://9878621572.myjino.ru/img/logo.svg" alt=""/></div>
      <div className={s.loginBlock}>
        {isAuth ?
          (<div className={s.logined}><NavLink to={`/profile/${myId}`}>{login}</NavLink>
            <img onClick={loginOut} src={logoutHover} alt=""/></div>)
          : <div className={s.unlogined}><NavLink to={'/login'}>Login</NavLink></div>}

      </div>
    </header>)


}

export default Header;