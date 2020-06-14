import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";



class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myId
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)

    }


    render() {

        return (
            <Profile {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    myId: state.auth.id,
    userStatus: state.profilePage.userStatus
})


export default compose(connect(mapStateToProps, {setUserProfile, getUserProfile, getUserStatus, updateUserStatus}),
    withRouter/*,
    withAuthRedirect*/)
(ProfileContainer)