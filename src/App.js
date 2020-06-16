import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderComponent";
import LoginContainer from "./components/Login/LoginContainer";


const App = () => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <NavbarContainer/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>

        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

        <Route path='/users' render={() => <UsersContainer/>}/>

        <Route path='/news' component={News}/>

        <Route path='/music' component={Music}/>

        <Route path='/settings' component={Settings}/>

        <Route path='/login' component={LoginContainer}/>

      </div>
    </div>
  );
}

export default App;