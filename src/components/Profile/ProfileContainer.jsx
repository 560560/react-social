import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    getFollowStatus,
    followFromProfile,
    unfollowFromProfile,
    setIsOpen,
    savePhoto,
    addPhotoError,
    setEditMode,
    setNewProfileContacts
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getEditModeSelector,
    getErrorMessageSelector,
    getFollowedStatusSelector,
    getIdSelector, getIsOpenSelector, getLoadingStatusSelector,
    getProfileSelector,
    getUserStatusSelector
} from "../../redux/profileSelectors";


class ProfileContainer extends React.Component {

    rerenderProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myId
        }
        if (userId && userId !== this.props.myId) {
            this.props.getFollowStatus(userId)
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)

    }

    componentDidMount() {
        this.rerenderProfile()
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.rerenderProfile()
        }
    }


    render() {
        return (
            <Profile {...this.props}
                     userId={this.props.match.params.userId}
                     isOwner={!this.props.match.params.userId}/>
        )
    }
}


let mapStateToProps = (state) => ({

    profile: getProfileSelector(state),
    myId: getIdSelector(state),
    userStatus: getUserStatusSelector(state),
    isFollowed: getFollowedStatusSelector(state),
    isLoading: getLoadingStatusSelector(state),
    isOpen: getIsOpenSelector(state),
    errorMessage: getErrorMessageSelector(state),
    editMode: getEditModeSelector(state)


})


export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
        getFollowStatus,
        followFromProfile,
        unfollowFromProfile,
        setIsOpen,
        savePhoto,
        addPhotoError,
        setEditMode,
        setNewProfileContacts
    }),
    withRouter,
    withAuthRedirect)
(ProfileContainer)