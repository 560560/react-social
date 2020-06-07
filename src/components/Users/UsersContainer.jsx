import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreater, setUsersActionCreater, unfollowActionCreater, clearUsersActionCreater} from "../../redux/users-reducer";


let mapStateToProps = (state) =>{
  return {
    users: state.usersPage.users
  }

}
let mapDispatchToProps = (dispatch) =>{
  return{
    followTo: (userID) => {
      let action = followActionCreater(userID);
      dispatch(action);
    },
    unfollowFrom: (userID) => {
      let action = unfollowActionCreater(userID);
      dispatch(action);
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreater(users))
    },
    clearUsers: () => {
      dispatch(clearUsersActionCreater())
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;