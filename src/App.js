import React from 'react';
import {Route, withRouter} from "react-router-dom";
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
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

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
}


const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized
})


export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App)


