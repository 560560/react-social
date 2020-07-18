import React, {Suspense} from 'react';
import {Route, withRouter} from "react-router-dom";
import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderComponent";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";



const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <div></div>
        }
        return (
            <div className='app-wrapper'>
                <Suspense fallback={<div><Preloader/></div>}>
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
                    <Route exact path='/' render={() => <ProfileContainer/>}/>
                </div>
                </Suspense>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)


